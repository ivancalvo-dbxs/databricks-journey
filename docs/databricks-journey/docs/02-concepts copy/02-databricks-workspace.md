---
sidebar_position: 2
---

# Workspace

A Databricks Workspace is the unified working environment for collaboration and isolation for users, groups and service principals (automation).

![Workspace Organization](/img/workspace-organization.png)

:::danger[Data and Models]

A Databricks Workspace **should NOT store and govern data and models**.

This is a task for **Unity Catalog**.

:::

## What can be created in a Workspace?

Check the Databricks Workspace objects on the following articles:

- [Databricks Workspace Objects](https://docs.databricks.com/aws/en/workspace/workspace-assets)
- [Access Control List for Databricks Workspace Objects](https://docs.databricks.com/aws/en/security/auth/access-control).

# Users, Groups and Service Principals

* Users
* Groups
* Service Principals 

Can be added (or removed) either as Users or Admins to a Workspace.

## Lessons learned

:::info What is a Workspace?
A Workspace is where you're going to create and combine the different Databricks Products to to create a Data+AI solution.
:::

:::info How many workspaces do I need?
* Databricks suggest three workspaces (dev, staging and prod). 

Highly aligned with the Software Development Lifecycle (SDLC)
:::

:::info Do I need a new workspace for each team in my organization?
* No, just add groups either as users or admins to a specific Workspace.
:::

:::info How can I isolate my organization data?
* The physical and logical isolation is achieved throgh **Unity Catalog** (next section).
:::