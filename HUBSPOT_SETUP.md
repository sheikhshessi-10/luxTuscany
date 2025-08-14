# HubSpot CRM Integration Setup

This project has been integrated with HubSpot CRM to capture lead information from the itinerary request modal.

## Configuration

The HubSpot integration is configured with the following credentials:

- **Portal ID**: `243564105`
- **Form GUID**: `b2a01941-5517-486d-9891-3ff19bb398e8`
- **Region**: `na1` (North America)

## Environment Variables (Optional)

You can override these values by creating a `.env` file in the root directory:

```bash
# HubSpot CRM Configuration
VITE_HUBSPOT_PORTAL_ID=243564105
VITE_HUBSPOT_FORM_GUID=b2a01941-5517-486d-9891-3ff19bb398e8
VITE_HUBSPOT_REGION=na1
```

## How It Works

1. **Form Submission**: When a user submits the itinerary request form, the data is sent directly to HubSpot CRM via their API
2. **Data Mapping**: The form fields are mapped to standard HubSpot contact properties:
   - `fullName` → `firstname` + `lastname`
   - `email` → `email`
   - `phone` → `phone`
   - `travelDates` → `travel_dates` (custom property)
   - `additionalRequests` → `additional_requests` (custom property)

3. **Lead Capture**: Each submission creates a new contact in HubSpot with the "Tuscany Insider Journeys - Itinerary Request" page context

## HubSpot Setup Requirements

Make sure you have the following custom properties created in your HubSpot portal:

- `travel_dates` (Single-line text)
- `additional_requests` (Multi-line text)

## Testing

To test the integration:

1. Fill out the itinerary request form
2. Submit the form
3. Check the browser console for HubSpot submission logs
4. Verify the contact appears in your HubSpot CRM

## Troubleshooting

- Check browser console for any error messages
- Verify the Portal ID and Form GUID are correct
- Ensure the HubSpot form is active and accepting submissions
- Check that custom properties exist in HubSpot

## Files Modified

- `src/lib/hubspot.ts` - HubSpot service utility
- `src/lib/config.ts` - Configuration management
- `src/components/ItineraryModal.tsx` - Form submission integration 