---
sidebar_position: 3
---

# Unity Catalog

Unity Catalog (UC from now on) is the the unified governance solution for data and AI assets on Databricks.

More information:

- [Databricks Unity Catalog](https://www.databricks.com/product/unity-catalog)
- [What is Unity Catalog?](https://docs.databricks.com/aws/en/data-governance/unity-catalog/)

## Unified Governance

![Unity Catalog Access](/img/uc-top-level.png)

## Where is UC positioned?

Unity Catalog is positioned between your cloud data lake and the Databricks products compute (jobs, pipelines, warehouses, model serving endpoints, applications).

![Unity Catalog Layer](/img/uc-layer.png)

## UC three-level namespace convention

![Unity Catalog Hierarchy](/img/uc-hierarchy.png)

## Every data and ML interaction goes through UC

* When an user or service principal:
  - Creates a table.
  - Adds data a table.
  - Deletes a table.
  - Query a table.
* Repeat for models, functions, views, schemas, volumes, etc...
  
The grants and permission(s) verification is on Unity Catalog as shown in the following diagram:

![Unity Catalog and Federation](/img/uc-and-federation.png)

## How to ingest data on "Databricks" or UC?

* Databricks storage and compute is decoupled. 
* When you "ingest data" in UC, actually you're creating new data files (tables) in your cloud object storage.
* The data is always stored on your cloud object storage as Delta format.
* UC manages your data and models (which are stored on your cloud object storage).

## Lessons learned

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

<!---
## Next steps

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

-->