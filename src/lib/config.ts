// Environment Configuration
export const config = {
  hubspot: {
    portalId: import.meta.env.VITE_HUBSPOT_PORTAL_ID || '243564105',
    formGuid: import.meta.env.VITE_HUBSPOT_FORM_GUID || 'b2a01941-5517-486d-9891-3ff19bb398e8',
    region: import.meta.env.VITE_HUBSPOT_REGION || 'na1',
  },
  app: {
    name: 'Tuscany Insider Journeys',
    description: 'Exclusive luxury travel experiences in Tuscany',
  }
}; 