
import { ResourceType } from "../types/types";

function createResourceUri(
  resourceType: ResourceType,
  resourceId: string,
  baseUrl: string = 'https://open.spotify.com'
): string {
  if (!resourceType || !resourceId) {
    throw new Error('Both resourceType and resourceId are required');
  }
  
  return `${baseUrl}/${resourceType}/${resourceId}`;
}

export default createResourceUri;