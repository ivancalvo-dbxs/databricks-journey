---
sidebar_position: 1
---

# Azure

import useBaseUrl from '@docusaurus/useBaseUrl';

# Create the first Workspace

:::info Goal
* Deploy the **dev workspace** using Terraform.
* Deploy on the **dev** Azure subscription.
:::

:::info Next goal
* Repeat the process for the **staging** and **production** workspaces.
* Deploy on the respective Azure Subscriptions.
:::

### Save time and clicks with Terraform (🔥)

To easily accomplish this task, use the following repo and Youtube Tutorial:

* [Terraform Databricks Workspaces 2025](https://github.com/ivancalvo-dbxs/terraform-databricks-workspaces-2025)


#### Youtube tutorial for the workspace creation

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/jVMgw0_Z3h8"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>


### Manual approach through the UI (👎)

:::danger Not recommended
This approach is not recommended, highly prone to error and misconfigurations.
:::

Follow one of the following guides:

* [Azure: Deploy a workspace using the Azure Portal](https://learn.microsoft.com/en-us/azure/databricks/admin/workspace/create-workspace)