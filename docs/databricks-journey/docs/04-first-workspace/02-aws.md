---
sidebar_position: 2
---

# AWS

import useBaseUrl from '@docusaurus/useBaseUrl';

# Create the first Workspace

:::info Goal
Deploy the **dev workspace** using Terraform
:::

:::info Next goal
Repeat the process for the **staging** and **production workspaces**.
:::

## How to create the Workspace?

### Save time and clicks with Terraform

To easily accomplish this task, use Terraform. Databricks offers multiple Terraform examples and modules in the following public repository:

[Terraform Databricks Modules and Examples](https://github.com/databricks/terraform-databricks-examples/tree/main/examples)

These are the recommended modules for the initial deployment:
    * For AWS, examples/aws-workspace-uc-simple
    * For Azure, examples/adb-vnet-injection
    * For GCP, examples/gcp-byovpc

#### AWS tutorial

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/cox_7P0RKn8"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>


### Manual approach through the UI 

:::danger Not recommended
This approach is not recommended, highly prone to error and misconfigurations.
:::

Follow one of the following guides:

* [AWS: Manually create a workspace](https://docs.databricks.com/aws/en/admin/workspace/create-workspace)
* [Azure: Deploy a workspace using the Azure Portal](https://learn.microsoft.com/en-us/azure/databricks/admin/workspace/create-workspace)
* [GCP: Create a workspace using the account console
](https://docs.databricks.com/gcp/en/admin/workspace/create-workspace)