// HubSpot CRM Integration Service
import { config } from './config';

const HUBSPOT_PORTAL_ID = config.hubspot.portalId;
const HUBSPOT_FORM_GUID = config.hubspot.formGuid;
const HUBSPOT_REGION = config.hubspot.region;

export interface HubSpotFormData {
  fullName: string;
  email: string;
  phone?: string;
  travelDates?: string;
  additionalRequests?: string;
}

export const submitToHubSpot = async (formData: HubSpotFormData): Promise<boolean> => {
  try {
    // HubSpot form submission endpoint
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;
    
    // Prepare the data for HubSpot
    const hubspotData = {
      fields: [
        {
          name: 'firstname',
          value: formData.fullName.split(' ')[0] || formData.fullName
        },
        {
          name: 'lastname', 
          value: formData.fullName.split(' ').slice(1).join(' ') || ''
        },
        {
          name: 'email',
          value: formData.email
        },
        {
          name: 'phone',
          value: formData.phone || ''
        },
        {
          name: 'travel_dates',
          value: formData.travelDates || ''
        },
        {
          name: 'additional_requests',
          value: formData.additionalRequests || ''
        }
      ],
      context: {
        pageUri: window.location.href,
        pageName: 'Tuscany Insider Journeys - Itinerary Request'
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hubspotData)
    });

    if (!response.ok) {
      throw new Error(`HubSpot submission failed: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('HubSpot submission successful:', result);
    return true;

  } catch (error) {
    console.error('Error submitting to HubSpot:', error);
    throw error;
  }
};

// Alternative method using HubSpot's embedded form approach
export const createHubSpotEmbeddedForm = (containerId: string): void => {
  // Load HubSpot script if not already loaded
  if (!window.hbspt) {
    const script = document.createElement('script');
    script.src = `//js.hsforms.net/forms/embed/v2.js`;
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: HUBSPOT_REGION,
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_GUID,
          target: `#${containerId}`,
          onFormSubmitted: (form: any) => {
            console.log('HubSpot form submitted:', form);
          }
        });
      }
    };
    document.head.appendChild(script);
  } else {
    // Script already loaded, create form directly
    window.hbspt.forms.create({
      region: HUBSPOT_REGION,
      portalId: HUBSPOT_PORTAL_ID,
      formId: HUBSPOT_FORM_GUID,
      target: `#${containerId}`,
      onFormSubmitted: (form: any) => {
        console.log('HubSpot form submitted:', form);
      }
    });
  }
};

// Type declaration for HubSpot global
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: any) => void;
      };
    };
  }
} 