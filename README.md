
Use this template to create new prototypes in DWP. This template is updated with every major version release of the GOVUK prototype kit. 

Best practice:<br>
<br>
Before making any changes to your code, open your prototype folder in terminal and Run: <br>npm audit <br>
Use ther information provided in terminal to fix any vulnerabilities before pushing your changes<br>
Keep package-lock.json under version control<br>
Do not blindly update packages without review<br>
Never connect to internal APIs or production systems<br>
Never store or process real user data<br>
Remove old or unused prototypes promptly<br>
Document the purpose and owner of each prototype clearly<br>
Avoid turning prototypes into live services<br>
Do not allow open write access to external collaborators<br>
<br>
Support

If you've got a question, idea or suggestion about the GOVUK protoype kit, get in touch with the GOV.UK Prototype team.

The GOV.UK Prototype team provides support to people who use the Prototype Kit and work in government.

We cannot give general advice to the public. We do not have access to information about you held by government departments.

For other enquiries, use the contact form on GOV.UK.

Slack

Use the #govuk-prototype-kit channel on cross-government Slack.

Email

Email the GOV.UK Prototype team at govuk-prototype-kit-support@digital.cabinet-office.gov.uk.

Information about the prototype kit and how it works can be found here: https://prototype-kit.service.gov.uk/docs/

Info on how to run the prototype:

You’ll use the terminal to start and stop the kit.
Open the prototype folder in terminal e.g. cd ~/Documents/prototypes/write-up-assistant-prototype
In the terminal, enter:

npm run dev

The first time you run npm run dev, the kit will ask you whether you want to send anonymous data to help the team improve the service. Enter y or n to answer yes or no.

In your web browser, go to open http://localhost:3000

Last updated in May 2026, Prototype kit Version 13