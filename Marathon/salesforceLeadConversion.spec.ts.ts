import { expect, test } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

test("Verify Lead Creation and Conversion to Opportunity", async ({ page }) => {
    test.setTimeout(240000);

    const username = process.env.SF_USERNAME;
    const password = process.env.SF_PASSWORD;

    if (!username || !password) {
        throw new Error("Set SF_USERNAME and SF_PASSWORD in the .env file");
    }

    const uniqueNumber = Date.now();
    const salutation = "Mrs.";
    const firstName = "Jazz";
    const lastName = `Abhi${uniqueNumber}`;
    const companyName = `Kian ${uniqueNumber}`;
    const opportunityName = `Jazz Opportunity ${uniqueNumber}`;

    // Steps 1-3: launch Chrome, open Salesforce, and log in.
    await page.goto("https://login.salesforce.com/", {
        waitUntil: "domcontentloaded",
        timeout: 60000
    });

    await expect(page.getByLabel("Username")).toBeEditable();
    await page.getByLabel("Username").fill(username);
    await page.getByLabel("Password").fill(password);
    await page.getByRole("button", {
        name: "Log In",
        exact: true
    }).click();

    await page.waitForURL(/\/lightning\//, {
        timeout: 120000
    });
    await expect(page.getByRole("button", {
        name: "App Launcher"
    })).toBeVisible({ timeout: 60000 });

    // Steps 4-6: open App Launcher and select Marketing CRM Classic.
    await page.getByRole("button", {
        name: "App Launcher"
    }).click();

    const launcherDialog = page.getByRole("dialog", {
        name: "App Launcher"
    });
    await expect(launcherDialog).toBeVisible();

    await launcherDialog.getByRole("button", {
        name: "View All Applications",
        exact: true
    }).click();

    const appSearchBox = page.getByPlaceholder(
        "Search apps or items...",
        { exact: true }
    );
    await expect(appSearchBox).toBeEditable({ timeout: 30000 });
    await appSearchBox.fill("Marketing");

    const marketingLink = page.locator(
        'a[data-label="Marketing CRM Classic"]'
    ).or(page.getByRole("link", {
        name: "Marketing CRM Classic",
        exact: true
    })).first();
    await expect(marketingLink).toBeVisible({ timeout: 30000 });
    await marketingLink.click();

    await expect(page.getByRole("heading", {
        name: "Marketing CRM Classic"
    })).toBeVisible({ timeout: 60000 });

    // Steps 7-8: open Leads and start a new Lead.
    await page.locator('a[title="Leads"]').first().click();
    const newButton = page.getByRole("button", {
        name: "New",
        exact: true
    }).first();
    await expect(newButton).toBeVisible({ timeout: 30000 });
    await newButton.click();

    const newLeadDialog = page.getByRole("dialog").last();
    await expect(newLeadDialog).toBeVisible({ timeout: 30000 });

    // Steps 9-10: populate mandatory fields and save the Lead.
    await newLeadDialog.locator('button[name="salutation"]').click();
    await page.getByRole("option", {
        name: salutation,
        exact: true
    }).click();

    const firstNameInput = newLeadDialog.locator('input[name="firstName"]');
    const lastNameInput = newLeadDialog.locator('input[name="lastName"]');
    const companyInput = newLeadDialog.locator('input[name="Company"]');

    await firstNameInput.fill(firstName);
    await lastNameInput.fill(lastName);
    await companyInput.fill(companyName);

    await expect(firstNameInput).toHaveValue(firstName);
    await expect(lastNameInput).toHaveValue(lastName);
    await expect(companyInput).toHaveValue(companyName);

    await newLeadDialog.locator('button[name="SaveEdit"]').click();

    const leadToast = page.locator("span.toastMessage");
    await expect(leadToast).toBeVisible({ timeout: 30000 });
    await expect(leadToast).toContainText(lastName);

    await page.waitForURL(/\/lightning\/r\/Lead\//, {
        timeout: 60000
    });

    // Step 11: open the Lead action menu and choose Convert.
    const conversionDialog = page.getByRole("dialog", {
        name: "Convert Lead"
    });

    if (!await conversionDialog.isVisible()) {
        const directConvertButton = page.getByRole("button", {
            name: "Convert",
            exact: true
        }).first();

        if (await directConvertButton.isVisible()) {
            await directConvertButton.click();
        } else {
            const moreActions = page.getByRole("button", {
                name: /Show more actions/
            }).first();
            await expect(moreActions).toBeVisible({ timeout: 30000 });
            await moreActions.click();

            const convertAction = page.getByText("Convert", {
                exact: true
            }).last();
            await expect(convertAction).toBeVisible({ timeout: 30000 });
            await convertAction.click();
        }
    }

    await expect(conversionDialog).toBeVisible({ timeout: 30000 });

    // Steps 12-13: set the Opportunity Name and convert the Lead.
    const opportunityInput = conversionDialog.getByRole("textbox", {
        name: /^Opportunity Name/
    });

    if (!await opportunityInput.isVisible()) {
        await conversionDialog.getByRole("button", {
            name: "Opportunity",
            exact: true
        }).click();
    }

    await expect(opportunityInput).toBeEditable({ timeout: 30000 });
    await opportunityInput.clear();
    await opportunityInput.fill(opportunityName);
    await expect(opportunityInput).toHaveValue(opportunityName);

    await conversionDialog.getByRole("button", {
        name: "Convert",
        exact: true
    }).click();

    const conversionMessage = page.getByText(
        "Your lead has been converted",
        { exact: false }
    );
    await expect(conversionMessage).toBeVisible({ timeout: 60000 });

    // Steps 14-15: return to Leads and verify the converted Lead is absent.
    await page.getByRole("button", {
        name: "Go to Leads",
        exact: true
    }).click();

    const leadsSearch = page.getByRole("searchbox", {
        name: "Search this list..."
    }).first();
    await expect(leadsSearch).toBeEditable({ timeout: 30000 });
    await leadsSearch.fill(lastName);
    await leadsSearch.press("Enter");

    const noItemsMessage = page.getByText("No items to display", {
        exact: true
    }).or(page.getByText("Nothing to see here", { exact: true }));
    await expect(noItemsMessage).toBeVisible({ timeout: 30000 });

    // Steps 16-17: find, open, and verify the converted Opportunity.
    await page.locator('a[title="Opportunities"]').first().click();

    const opportunitySearch = page.getByRole("searchbox", {
        name: "Search this list..."
    }).first();
    await expect(opportunitySearch).toBeEditable({ timeout: 30000 });
    await opportunitySearch.fill(opportunityName);
    await opportunitySearch.press("Enter");

    const opportunityLink = page.getByRole("link", {
        name: opportunityName,
        exact: true
    }).first();
    await expect(opportunityLink).toBeVisible({ timeout: 30000 });
    await opportunityLink.click();

    await expect(page.getByRole("heading", {
        name: `Opportunity ${opportunityName}`,
        exact: true
    })).toBeVisible({ timeout: 30000 });
});
