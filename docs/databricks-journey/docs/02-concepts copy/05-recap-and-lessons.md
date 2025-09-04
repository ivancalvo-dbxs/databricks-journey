---
sidebar_position: 5
---

# Recap and Learning 💡

## Workspace
:::info What is a Workspace?
A Workspace is where you're going to create and combine the different Databricks Products to to create a Data+AI solution.
:::

:::info How many workspaces do I need?
* The best practice is 3 separated workspaces highly aligned with the Software Development Lifecycle (SDLC)
    * dev, staging and prod.
:::

:::info Do I need a new workspace for each team in my organization?
* No, just add groups either as users or admins to a specific Workspace.
:::

:::info How can I isolate my organization data?
* The physical and logical isolation is achieved throgh **Unity Catalog** (next section).
:::

## Unity Catalog
:::info What is UC?
Unity Catalog is a centralized metadata layer designed to manage data access, security, lineage, and governance across Databricks workspaces, enabling unified data management and secure collaboration.
:::

:::info Where is the data stored?
The data, metadata and AI models are always stored in your cloud-object storage.
:::

:::info How should every data+AI interaction should be done?
Through Unity Catalog.
:::

:::danger What should be avoided?
- Accessing data using hardcoded credentials.
- Configure data access on the clusters using external libraries + environment variables.
:::

## Databricks Account Console
:::info What is the purpose of the Databricks Account Console?
A portal similar to your cloud provider console / UI, here you can manage:
  * Workspaces.
  * UC Metastores.
  * Users, Groups and Service Principals.
  * Billing and Budgets.
  * SCIM and SSO.
:::