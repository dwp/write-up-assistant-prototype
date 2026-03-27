module.exports = {
  userName: "John Smith",
  userNINO: "RN 00 01 23 A",
  userDoB: "31 December 1999",
  reportCompleteDate: "20th March 2026",
  reportBenefitType: "Personal Independence Payment",
  reportAssessType: "Telephone assessment",
  reportHCP: "Dr. Smith",
  ConsultationDate: "20th March 2026",



  // CONDITION HISTORY
  conditionHeadings: `
• Summary of main conditions
• Onset and duration
• Progression over time
• Current symptoms
• Variability and fluctuation
• Recent clinical changes
`,

  // MEDICATION
  medicationHeadings: `
• Medication name
• Dosage
• Frequency
• Purpose / indication
• Reported effectiveness
• Reported side effects
`,

  // SOCIAL HISTORY
  socialHistoryHeadings: `
• Living situation
• Daily routine
• Work history
• Social support / environment
• Impact on functioning
`,

  // PREPARING FOOD
  preparingFoodHeadings: `
• Planning meals
• Preparing ingredients
• Use of kitchen tools
• Cooking safely
• Fatigue or pain when cooking
`,

  // TAKING NUTRITION
  takingNutritionHeadings: `
• Eating difficulties
• Drinking concerns
• Appetite or nausea issues
• Safety concerns when eating
• Independent vs supported eating
`,

  // MANAGING THERAPY
  managingTherapyHeadings: `
• Understanding of treatment
• Following therapy routines
• Ability to self-manage treatments
• Any assistance required
• Compliance / barriers
`,

  // WASHING & BATHING
  washingBathingHeadings: `
• Accessing bathroom
• Standing / balance issues
• Using aids
• Washing upper/lower body
• Risk or safety concerns
`,

  // TOILET NEEDS
  toiletNeedsHeadings: `
• Continence
• Getting to the toilet
• Using toilet aids
• Cleaning / hygiene challenges
• Assistance required
`,

  // DRESSING
  dressingHeadings: `
• Selecting clothes
• Putting on clothing
• Fastenings (zips/buttons)
• Removing clothing
• Pain, stiffness or fatigue
`,

  // COMMUNICATING VERBALLY
  communicationHeadings: `
• Speech clarity
• Ability to express needs
• Understanding spoken information
• Conversational engagement
`,

  // READING & UNDERSTANDING
  readingHeadings: `
• Reading printed text
• Understanding written instructions
• Visual or cognitive difficulties
`,

  // ENGAGING FACE TO FACE
  engagingHeadings: `
• Eye contact
• Interaction style
• Social engagement
• Responding to questions
`,

  // BUDGETING
  budgetingHeadings: `
• Managing money
• Paying bills
• Budgeting tasks
• Understanding financial information
`,

  // JOURNEYS
  journeysHeadings: `
• Planning routes
• Following directions
• Using public transport
• Anxiety or safety concerns
`,

  // MOVING AROUND
  movingHeadings: `
• Standing and walking
• Balance and stability
• Mobility aids used
• Pain or fatigue when moving
`,

  // MENTAL STATE
  mentalStateHeadings: `
• Behavioural observations
• Cognitive function
• Interaction during consultation
• Attention, memory, insight
`,

  // INFORMAL OBSERVATIONS
  informalHeadings: `
• General appearance
• Unstructured behaviours
• Movements, mannerisms
• Notable comments or actions
  `
,

  ai_ack_condition_history: false,
  ai_ack_medication: false,
  ai_ack_soh: false,
  ai_ack_section1: false,
  ai_ack_section2: false,
  ai_ack_section3: false,
  ai_ack_section4: false,
  ai_ack_section5: false,
  ai_ack_section6: false,
  ai_ack_section7: false,
  ai_ack_section8: false,
  ai_ack_section9: false,
  ai_ack_section10: false,
  ai_ack_section11: false,
  ai_ack_section12: false,
  ai_ack_observations: false,


 crisplist:
  "HOC\n"
  + "Diagnosis:\n\n"
  + "Input & management:\n\n"
  + "Symptoms & Variability:\n\n"
  + "Aids:\n\n\n"
  + "SOH\n\n"
  + "Accommodation\n\n"
  + "Live with:\n\n"
  + "Adaptation:\n\n"
  + "Children/pet:\n\n"
  + "Bathroom/shower, walk-in shower:\n\n"
  + "Currently working Last worked as/ Left due to:\n\n"
  + "Currently studying:\n\n"
  + "Correspondence/bills:\n\n"
  + "Driving:\n\n"
  + "Shopping:\n\n"
  + "Housework:\n\n"
  + "Walking:\n\n"
  + "Hobbies:",


  RecommendedReviewPeriod:
    "The claimant is known to have prostate cancer, back pain and low mood.\n\n"
    + "His assessment showed functional restrictions in some daily living activities and mobility. He remains under the care of the urology consultant due to ongoing bladder incontinence, and is awaiting review by the pain management and physiotherapy teams for his back pain. There may be significant improvement or deterioration during this timeframe. Therefore, a review in 18 months was advised.\n\n"
    + "It is likely that the functional restrictions identified in this report will be present at the recommended point of review: Yes.\n\n"
    + "Although the claimant has not applied under the terminal illness provisions, in my opinion they are not terminally ill under the prescribed definition: No.\n\n"
    + "I can confirm that there is no harmful information in this report.",


addedConditions: [],

addedMedications: [],


  caseStatus: "New",
  cases: [
    {
      case_id: 1,
      report: [
        {
          status: "complete",
          content: [
            {
              "Condition or disability name": "Prostate Cancer",
              "When did the condition or disability start?": "March 2023",
              "Diagnosis, impact and variability":
                "Diagnosed during an annual review due to a raised PSA level, with no urinary symptoms present at the time.\n\n"
                + "Ongoing bladder incontinence, nausea, and sickness, which have lasted 6-12 months and occur most days.",
              "Current treatments, specialist input and hospital stays":
                "Underwent Robotic assisted Laparoscopic Prostatectomy on 16/09/2023 under the care of a Consultant Urologist.\n\n"
                + "Currently taking Tadalafil, Omeprazole, and Prochlorperazine.",
              "Home therapies (optional)":
                "Performs pelvic exercises, uses incontinent pads, and water‑proof sheets.",
              "Suicidal thoughts and self harm (optional)": "NA"
            },

            {
              "Condition or disability name": "Back pain/sciatica pain",
              "When did the condition or disability start?": "Several months ago",
              "Diagnosis, impact and variability":
                "MRI of the lumbar spine revealed bulging discs and impingement with arthritis, while an MRI of the neck revealed disc protrusion and bulging with multiple nerve impingement.\n\n"
                + "Pain is triggered by walking, twisting, and slight bending, and occurs most days.",
              "Current treatments, specialist input and hospital stays":
                "Under the care of their GP and has been referred for physiotherapy and pain management.\n\n"
                + "Taking Paracetamol, Ibuprofen, Codeine, and Naproxen 3–4 times a day.",
              "Home therapies (optional)":
                "Purchased a special chair with cushions.",
              "Suicidal thoughts and self harm (optional)": "NA"
            },

            {
              "Condition or disability name": "Mental health",
              "When did the condition or disability start?": "Since the operation",
              "Diagnosis, impact and variability":
                "Feeling low, unable to do anything, leading to low mood and insomnia.\n\n"
                + "Symptoms occur most days.",
              "Current treatments, specialist input and hospital stays":
                "Not taking any prescribed mental health medication.",
              "Home therapies (optional)":
                "NA",
              "Suicidal thoughts and self harm (optional)":
                "Questioning the point of living, but family is a protective factor."
            }
          ]
        },
        {
          status: "complete",
          content: [
            {
              section: "Social and occupational history",
              text:
                "The claimant lives in a house with 2 flights of stairs, but stays on the ground floor due to toilet access, and crawls up the stairs to their bedroom at night.\n\n"
                + "They live with their wife, and there are no pets.\n\n"
                + "No adaptations have been made to the accommodations.\n\n"
                + "The claimant last worked as a self-employed facilities manager on 15/09/2023, driving to sites and facilities, but had to stop due to prostate operations and resulting bladder incontinence.\n\n"
                + "They have no carer responsibilities, but struggle with housework due to back pain and bladder incontinence.\n\n"
                + "They also struggle with shopping due to back pain and bladder incontinence, feeling embarrassed and in pain.\n\n"
                + "The claimant has a driving licence, but stopped driving due to back pain and bladder incontinence.\n\n"
                + "When driving, their wife helps with seat and seatbelt adjustments as twisting is painful.\n\n"
                + "The claimant attended mainstream Primary and Secondary school, and was in the Armed Forces as an Electric Mechanical Engineer.\n\n"
                + "They attended College for various management and electric engineer courses.\n\n"
                + "They used to enjoy Judo, gardening, and golf, but have no hobbies now, and spend their day listening to music and the world news."
            },

            {
              section: "Mental state",
              text:
                "This was a telephone assessment.\n\n"
                + "Coped well at assessment.\n\n"
                + "Normal manner.\n\n"
                + "No overt signs of anxiety noted and no signs of OPD.\n\n"
                + "Good rapport and engaged well.\n\n"
                + "Making humorous remarks.\n\n"
                + "Speech was normal in amount, content, rate, tone and volume.\n\n"
                + "Behaved normally; was not withdrawn.\n\n"
                + "Conversation content indicated self-awareness and good understanding of their condition.\n\n"
                + "No evidence of cognitive impairment.\n\n"
                + "Was fully alert and orientated throughout assessment.\n\n"
                + "Answered all questions fully and appropriately.\n\n"
                + "Was able to participate in the process independently.\n\n"
                + "No prompting required.\n\n"
                + "Had good insight, adequate general memory and concentration.\n\n"
                + "No evidence of suicidal ideation or self-harm."
            },

            {
              section: "Observations",
              text:
                "The claimant had adequate rapport and coped well during the phone interview. Speech was clear, normal in rate and volume.\n\n"
                + "The claimant was able to provide adequate information regarding their condition without prompting.\n\n"
                + "They were oriented in time, place, and person. The claimant had good insight into their conditions. During the assessment, they did not disclose any self-harm or suicidal thoughts."
            }
          ]
        },
        {
          status: "complete",
          content: [
            {
              "Medication Name": "Paracetamol",
              "Dosage": "1g",
              "Frequency": "Up to four times a day",
              "Reason for taking": "For back pain",
              "Effectiveness (optional)": "",
              "Side effects (optional)": ""
            },
            {
              "Medication Name": "Ibuprofen",
              "Dosage": "400mg",
              "Frequency": "Up to 6 times",
              "Reason for taking": "For pain",
              "Effectiveness (optional)": "",
              "Side effects (optional)": "Tummy pain and constipation"
            },
            {
              "Medication Name": "Codeine Phosphate",
              "Dosage": "30-60mg",
              "Frequency": "Four times a day",
              "Reason for taking": "For pain",
              "Effectiveness (optional)": "",
              "Side effects (optional)": "Fatigue"
            },
            {
              "Medication Name": "Prochlorperazine",
              "Dosage": "6mg",
              "Frequency": "Once a day",
              "Reason for taking": "For nausea",
              "Effectiveness (optional)": "",
              "Side effects (optional)": "Dry mouth"
            },
            {
              "Medication Name": "Movicol sachet",
              "Dosage": "",
              "Frequency": "Three times a day",
              "Reason for taking": "For constipation",
              "Effectiveness (optional)": "",
              "Side effects (optional)": "Diarrhea"
            },
            {
              "Medication Name": "Lactulose",
              "Dosage": "5ml",
              "Frequency": "Three times a day",
              "Reason for taking": "For constipation",
              "Effectiveness (optional)": "",
              "Side effects (optional)": ""
            },
            {
              "Medication Name": "Tadalafil",
              "Dosage": "20mg",
              "Frequency": "Once a week",
              "Reason for taking": "",
              "Effectiveness (optional)": "",
              "Side effects (optional)": ""
            },
            {
              "Medication Name": "Naproxen",
              "Dosage": "500mg",
              "Frequency": "Twice a day",
              "Reason for taking": "For pain",
              "Effectiveness (optional)": "",
              "Side effects (optional)": ""
            }
          ]
        },


        {
          content: {
            name: "Preparing food",
            description:
              "The claimant is unable to cook or prepare meals independently due to chronic lower back pain and bladder incontinence.\n\n"
              + "They rely on their wife for meal preparation.\n\n"
              + "Although capable of using a microwave and performing simple tasks like chopping and peeling, they haven't done so recently.\n\n"
              + "Standing for any length of time exacerbates back pain, leading to urinary incontinence when bending or straining. This has resulted in accidents or near misses in the kitchen.\n\n"
              + "The claimant is undergoing daily pelvic floor exercises to address the incontinence issue, which may take 6–12 months to resolve.\n\n"
              + "Additionally, they experience daily hives.",
            option:
              "(1b) Needs to use an aid or appliance to be able to either prepare or cook a simple meal",
            justification:
              "(FH): The claimant is unable to cook or prepare meals independently due to chronic lower back pain and bladder incontinence.\n\n"
              + "Standing for any length of time exacerbates back pain, leading to urinary incontinence when bending or straining.\n\n"
              + "This has resulted in accidents or near misses in the kitchen, indicating a need for assistance or adaptations."
          }
        },
        {
          content: {
            name: "Taking nutrition",
            description:
              "The individual takes nutrition without assistance, consuming three main meals a day with biscuits as a snack.\n\n"
              + "They are able to feed themselves using normal cutlery and do not experience any swallowing issues.\n\n"
              + "Additionally, they are conscious of their weight and do not require input from a dietician or prescribed nutritional drinks.",
            option: "(2a) Can take nutrition unaided",
            justification:
              "(FH): The individual takes nutrition without assistance, consuming three main meals a day with biscuits as a snack.\n\n"
              + "They are able to feed themselves using normal cutlery and do not experience any swallowing issues.\n\n"
              + "Additionally, they are conscious of their weight and do not require input from a dietician or prescribed nutritional drinks."
          }
        },
        {
          content: {
            name: "Managing therapy",
            description:
              "The claimant has difficulty remembering to take medication, but is able to remove tablets from packets without aid and uses a dosette to manage medication with the help of their wife.\n\n"
              + "They also receive physiotherapy twice a month for back pain and pelvic floor training, which costs £45.00 per visit, as the NHS waiting list is long.",
            option:
              "(3a) Either does not receive medication or therapy or need to monitor a health condition, or can manage medication or therapy or monitor a health condition unaided",
            justification:
              "The claimant can manage medication or therapy or monitor a health condition unaided, as evidenced by:\n\n HOC: The claimant takes medications as prescribed by a healthcare professional and performs pelvic exercises and uses incontinent pads and water-proof sheets as part of their home therapies.\n\n"
              + "MH: TThe claimant is able to manage their medication regime, including taking multiple medications, and experiences some side effects.\n\n"
              + "FH: The claimant is able to remove tablets from packets without aids and uses a dosette to manage medication with the help of their wife, indicating some ability to manage therapy independently.\n\n"
              + "Overall, the evidence suggests that the claimant is able to manage medication or therapy or monitor a health condition unaided, despite some difficulties with remembering to take medication."
          }
        },
        {
          content: {
            name: "Washing and bathing",
            description:
              "The claimant has a shower cubicle at home and washes daily due to bladder incontinence.However, they require assistance with washing their back and behind, and struggle with getting in and out of the shower.\n\n"
              + "To aid with this, they use 2 beams on each side of the door and hold the shower tap for support when getting in and out of the shower.\n\n"
              + "While they can stand for 5 minutes, they have difficulty standing while washing due to back pain. They are able to manage their upper body but struggle with their lower body.",
            option:
              "(4e) Needs assistance to be able to get in or out of a bath or shower",
            justification:
              "FH: The claimant requires assistance with getting in and out of the shower. They use 2 beams on each side of the door and hold the shower tap for support when getting in and out of the shower. \n\n"
              + "CM shows claimant is on multiple pain relief medication, consistent with diagnosis. SOH shows claimant struggles to get up and down the stairs, crawling back upstairs at night."
          }
        },
        {
          content: {
            name: "Managing toilet needs",
            description:
              "The claimant experiences daily bladder incontinence, using adult incontinent pads, and relies on a sink for support when using the toilet.\n\n"
              + "They struggle with personal hygiene due to back pain, using wipes and receiving assistance from their wife.\n\n"
              + "The bladder incontinence started after a prostatectomy operation. The claimant has good and bad days with incontinence.\n\n"
              + "On good days, they only change their underwear, while on bad days, they leak onto bed sheets, changing underwear several times a day, with their wife helping with laundry.",
            option:
              "(5b) Needs to use an aid or appliance to be able to manage toilet needs or incontinence",
            justification:
              "HOC: Ongoing bladder incontinence, uses incontinent pads.\n\n"
              + "FH: Experiences daily bladder incontinence, using adult incontinent pads, and relies on a sink for support when using the toilet. Struggles with personal hygiene due to back pain, using wipes and receiving assistance from their wife.\n\n"
              + "SOH: Stays on ground floor due to toilet access, crawls up stairs to bedroom at night.\n\n"
              + "These sources suggest that the claimant needs to use an aid or appliance to manage their toilet needs or incontinence."
          }
        },
        {
          content: {
            name: "Dressing and undressing",
            description:
              "The individual changes clothes daily but faces difficulties due to incontinence.\n\n"
              + "They need to lie on the bed to put on pants, which takes a significant amount of time.\n\n"
              + "Assistance from their wife is required for putting on socks and shoes. Bending down is difficult due to back pain radiating to the hips, recent surgery, and incontinence. However, they can manage buttons and zippers and dress their upper body independently.\n\n",
            option:
              "(6b) Needs to use an aid or appliance to be able to dress or undress",
            justification:
              "FH: The individual faces challenges due to bladder incontinence and needs to lie on the bed to put on pants, which takes a significant amount of time. Assistance from their wife is required for putting on socks and shoes.\n\n"
              + "Bending down is difficult due to back pain radiating to the hips, recent surgery, and incontinence."
          }
        },
        {
          content: {
            name: "Communicating verbally",
            description:
              "The claimant has no reported hearing impairment and does not use hearing aids.\n\n"
              + "They are able to use a mobile phone and converse normally, indicating no significant hearing difficulties. Overall, there are no issues with verbal communication.",
            option:
              "(7a) Can express and understand verbal information unaided",
            justification:
              "FH: The claimant has no reported hearing impairment and does not use hearing aids. They are able to use a mobile phone and converse normally, indicating no significant hearing difficulties.\n\n"
              + "IO: Speech was clear, normal in rate and volume. Able to provide adequate information regarding condition without prompting.\n\n"
              + "MSO: The claimant's ability to convey and understand verbal information in their native language is considered, including clarity of speech and ability to make themselves understood.\n\n"
              + "Therefore, it is likely he can express and understand verbal information unaided.",
          }
        },
        {
          content: {
            name: "Reading and understanding signs, symbols and words",
            description:
              "The claimant is able to read and understand signs, symbols, and words.\n\n"
              + "They wear glasses daily, with separate pairs for long and short distances, and are able to read medical and appointment letters independently, indicating no issue with this activity.",
            option:
              "(8a) Can read and understand basic and complex written information either unaided or using spectacles or contact lenses",
            justification:
              "(FH): The claimant is able to read and understand signs, symbols, and words. They wear glasses daily, with separate pairs for long and short distances, and are able to read medical and appointment letters independently, indicating no issue with this activity.\n\n"
              + "This information suggests that the claimant can read and understand basic and complex written information either unaided or using spectacles or contact lenses."
          }
        },
        {
          content: {
            name: "Engaging face to face",
            description:
              "Due to bladder incontinence and back pain, social activities have been significantly reduced.\n\n"
              + "Fear of accidents has led to a loss of confidence in going out in public, causing a decline in social life. The individual is unable to control their bladder, leading to embarrassment and reliance on others for assistance.\n\n"
              + "To avoid accidents, they refrain from drinking for 12 hours before medical appointments and have stopped engaging in physical activities, such as keeping fit, which they previously enjoyed 3-4 times a week.\n\n"
              + "As a result, they currently have no social life, but remain hopeful that things will improve in the future.",
            option: "(9a) Can engage with other people unaided",
            justification:
              "(IO): Claimant had adequate rapport and coped well during phone interview.\n\n"
              + "(FH): No relevant information found that suggests the claimant cannot engage with other people unaided. HOC shows no medical or specialist input for mental health. "
          }
        },
        {
          content: {
            name: "Budgeting",
            description:
              "The individual is capable of handling finances independently, utilizing direct debit for bills and online banking for transfers and account management.\n\n"
              + "They frequently use a card for daily purchases and typically manage change without issues, demonstrating an ability to make budgeting decisions without assistance.",
            option: "(10a) Can manage complex budgeting decisions unaided",
            justification:
              "(FH): The individual is capable of handling finances independently, utilizing direct debit for bills and online banking for transfers and account management. They frequently use a card for daily purchases and typically manage change without issues, demonstrating an ability to make budgeting decisions without assistance."
          }
        },
        {
          content: {
            name: "Planning and following journeys",
            description:
              "The individual is largely housebound due to medical conditions, specifically bladder incontinence and lower back pain. They only leave home for medical reviews and appointments, relying on their wife for a car lift as public transport is difficult.\n\n"
              + "The incontinence requires them to stay near a toilet at all times, which is a major factor in their limited mobility.\n\n"
              + "A recent shopping trip with their wife resulted in a humiliating incontinence experience, leaving them feeling mortified and embarrassed. No OPD symptoms reported.",
            option:
              "(11a) Can plan and follow the route of a journey unaided",
            justification:
              "(FH): The individual is largely housebound due to medical conditions, specifically bladder incontinence and lower back pain. They only leave home for medical reviews and appointments, relying on their wife for a car lift as public transport is difficult.\n\n"
              + "No relevant information found in HOC, SOH, MH, MSO, and IO sections to support the descriptor. HOC does not report any mental health medical or specialist input. FH and HOC does not report any symptoms of OPD. FH shows claimant does not leave his house on the majority of the days due to physical restrictions."
          }
        },
        {
          content: {
            name: "Moving around",
            description:
              "The individual experiences significant mobility issues, reporting difficulty walking and often shuffling between rooms while holding onto furniture and kitchen island for support. \n\n"
              + "Due to these mobility issues, they mostly stay at home. When venturing out, they can only manage to walk to their car at a slow pace for a few yards. Occasionally, they go to their backyard for fresh air, but can only manage 1-3 minutes of slow-paced walking before needing to stop and grab onto something for support due to pain.",
            option:
              "(12c) Can stand and then move unaided more than 20 metres but no more than 50 metres",
            justification:
              "FH: The individual experiences significant mobility issues, reporting difficulty walking and often shuffling between rooms while holding onto furniture and kitchen island for support. When venturing out, they can only manage to walk to their car at a slow pace for a few yards. Occasionally, they go to their backyard for fresh air, but can only manage 1-3 minutes of slow-paced walking before needing to stop and grab onto something for support due to pain.\n\n"
              + "SOH: Crawls up stairs to bedroom at night due to difficulties with mobility. Struggles with housework and shopping due to back pain and bladder incontinence. Feels embarrassed and in pain when struggling with daily activities.\n\n"
              + "HOC: The claimant has back pain/sciatica pain triggered by walking, twisting, and slight bending, which occurs most days. The claimant is unable to sit for more than 20 minutes and constantly changes positions.\n\n"
              + "It is likely that the claimant can stand and then move unaided more than 20 metres but no more than 50 metres, safely, timely, repeatedly and to an acceptable standard on the majority of days"
          }
        }

      ]
    }
  ]
};











  
