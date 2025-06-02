import { ResourceType } from "../../../types/types";

export type GenerateCardWidgetProps = {
  /** Props for the CustomizePanel component */
  className?: string;
  resourceId?: string;
  resourceType?:ResourceType;
};