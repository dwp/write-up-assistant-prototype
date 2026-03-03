module.exports = {
  userName: "John Smith",
  userNINO: "RN 00 01 23 A",
  userDoB: "31 December 1999",
  reportCompleteDate: "20th March 2026",
  reportBenefitType: "Personal Independence Payment",
  reportAssessType: "Telephone assessment",
  reportHCP: "Dr. Smith",
  ConsultationDate: "20th March 2026",

  RecommendedReviewPeriod: (
    "The claimant is known to have prostate cancer, back pain and low mood.\n\n"
    + "His assessment showed functional restrictions in some daily living activities and mobility. He remains under the care of the urology consultant due to ongoing bladder incontinence, and is awaiting review by the pain management and physiotherapy teams for his back pain. There may be significant improvement or deterioration during this timeframe. Therefore, a review in 18 months was advised.\n\n"
    + "It is likely that the functional restrictions identified in this report will be present at the recommended point of review: Yes.\n\n"
    + "Although the claimant has not applied under the terminal illness provisions, in my opinion they are not terminally ill under the prescribed definition: No.\n\n"
    + "I can confirm that there is no harmful information in this report."
  ),

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
                + "Ongoing bladder incontinence, nausea, and sickness, which have lasted 6–12 months and occur most days.",
              "Current treatments, specialist input and hospital stays":
                "Underwent robotic‑assisted laparoscopic prostatectomy on 16/09/2023 under the care of a Consultant Urologist.\n\n"
                + "Currently taking Tadalafil, Omeprazole, and Prochlorperazine.",
              "Home therapies (optional)":
                "Performs pelvic exercises, uses incontinent pads, and water‑proof sheets.",
              "Suicidal thoughts and self harm (optional)": ""
            },
            {
              "Condition or disability name": "Back pain / sciatica pain",
              "When did the condition or disability start?": "Several months ago",
              "Diagnosis, impact and variability":
                "MRI of the lumbar spine revealed bulging discs and impingement with arthritis; MRI of the neck revealed disc protrusion and bulging with multiple nerve impingements.\n\n"
                + "Pain is triggered by walking, twisting, and slight bending, and occurs most days.",
              "Current treatments, specialist input and hospital stays":
                "Under the care of their GP; referred for physiotherapy and pain management.\n\n"
                + "Taking Paracetamol, Ibuprofen, Codeine, and Naproxen 3–4 times a day.",
              "Home therapies (optional)":
                "Purchased a special chair with cushions.",
              "Suicidal thoughts and self harm (optional)": ""
            },
            {
              "Condition or disability name": "Mental health",
              "When did the condition or disability start?": "Since the operation",
              "Diagnosis, impact and variability":
                "Feeling low and unable to do anything, leading to low mood and insomnia.\n\n"
                + "Symptoms occur most days.",
              "Current treatments, specialist input and hospital stays":
                "Not taking any prescribed mental health medication.",
              "Home therapies (optional)":
                "Purchased a special chair with cushions.",
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
                "The claimant lives in a house with 2 flights of stairs, but stays on the ground floor due to toilet access, and crawls up the stairs to their bedroom at night.\n"
                + "They live with their wife, and there are no pets.\n"
                + "No adaptations have been made to the accommodations.\n"
                + "The claimant last worked as a self‑employed facilities manager on 15/09/2023, driving to sites and facilities, but had to stop due to prostate operations and resulting bladder incontinence.\n"
                + "They have no carer responsibilities, but struggle with housework due to back pain and bladder incontinence.\n"
                + "They also struggle with shopping due to back pain and bladder incontinence, feeling embarrassed and in pain.\n"
                + "The claimant has a driving licence, but stopped driving due to back pain and bladder incontinence.\n"
                + "When driving, their wife helps with seat and seatbelt adjustments as twisting is painful.\n"
                + "The claimant attended mainstream Primary and Secondary school, and was in the Armed Forces as an Electric Mechanical Engineer.\n"
                + "They attended College for various management and electric engineer courses.\n"
                + "They used to enjoy Judo, gardening, and golf, but have no hobbies now, and spend their day listening to music and the world news."
            },
            {
              section: "Mental state observations",
              text:
                "This was a telephone assessment.\n"
                + "Coped well at assessment.\n"
                + "Normal manner.\n"
                + "No overt signs of anxiety noted and no signs of OPD.\n"
                + "Good rapport and engaged well.\n"
                + "Making humorous remarks.\n"
                + "Speech was normal in amount, content, rate, tone and volume.\n"
                + "Behaved normally, he was not withdrawn.\n"
                + "Conversation content during assessment indicated self‑awareness and a good understanding of their condition.\n"
                + "No evidence of cognitive impairment.\n"
                + "Was fully alert and orientated throughout assessment.\n"
                + "Answered all questions fully and appropriately.\n"
                + "Was able to participate in the process and engaged well without any input.\n"
                + "No prompting required.\n"
                + "Had good insight, adequate general memory and concentration.\n"
                + "No evidence of suicidal ideation or self‑harm."
            },
            {
              section: "Informal observations",
              text:
                "The claimant had adequate rapport and coped well during the phone interview. Speech was clear, normal in rate and volume.\n\n"
                + "The claimant was able to provide adequate information regarding their condition without prompting and was oriented in time, place, and person.\n\n"
                + "The claimant had good insight into their conditions. During the assessment, they did not disclose any self‑harm or suicidal thoughts."
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
              "Side effects (optional)": "Diarrhoea"
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

        //
        // 🔥 Restored sections
        //

        {
          content: {
            name: "Preparing food",
            description:
              "The claimant is unable to cook or prepare meals independently due to chronic lower back pain and bladder incontinence. They rely on their wife for meal preparation.\n\n"
              + "Although capable of using a microwave and performing simple tasks like chopping and peeling, they have not done so recently. Standing for any length of time exacerbates back pain, leading to urinary incontinence when bending or straining. This has resulted in accidents or near misses in the kitchen, indicating a need for assistance or adaptations.\n\n"
              + "The claimant is currently undergoing daily pelvic floor exercises to address the incontinence issue (which may take 6–12 months to resolve). Additionally, they experience daily hives.",
            option:
              "(1b) Needs to use an aid or appliance to be able to either prepare or cook a simple meal",
            justification:
              "(FH): The claimant is unable to cook or prepare meals independently due to chronic lower back pain and bladder incontinence. They rely on their wife for meal preparation.\n\n"
              + "Standing for any length of time exacerbates back pain, leading to urinary incontinence when bending or straining. This has resulted in accidents or near misses in the kitchen, indicating a need for assistance or adaptations."
          }
        },
        {
          content: {
            name: "Taking nutrition",
            description:
              "The individual takes nutrition without assistance, consuming three main meals a day with biscuits as a snack.\n\n"
              + "They are able to feed themselves using normal cutlery and do not experience any swallowing issues. They are conscious of their weight and do not require input from a dietician or prescribed nutritional drinks.",
            option: "(2a) Can take nutrition unaided",
            justification:
              "(FH): The individual takes nutrition without assistance, consumes regular meals, and uses normal cutlery without difficulty.\n\n"
              + "There is no evidence of dysphagia or need for specialist dietary input."
          }
        },
        {
          content: {
            name: "Managing therapy",
            description:
              "The claimant has difficulty remembering to take medication, but can remove tablets from packets without aids and uses a dosette to manage medication with the help of their wife.\n\n"
              + "They receive physiotherapy twice a month for back pain and pelvic floor training (private, due to NHS waiting times).",
            option:
              "(3a) Either does not receive medication or therapy or need to monitor a health condition, or can manage medication or therapy or monitor a health condition unaided",
            justification:
              "HOC: Takes medications as prescribed and undertakes home therapies (pelvic exercises, pads, water‑proof sheets).\n\n"
              + "MH: Able to manage a multi‑medicine regime, some side effects reported.\n\n"
              + "FH: Uses a dosette and spousal support; overall indicates capacity to manage therapy independently."
          }
        },
        {
          content: {
            name: "Washing and bathing",
            description:
              "The claimant has a shower cubicle at home and washes daily due to bladder incontinence. They require assistance with washing their back and behind, and struggle with getting in and out of the shower.\n\n"
              + "They use beams on each side of the door and hold the shower tap for support when entering and exiting. They can stand for about 5 minutes but have difficulty standing while washing due to back pain. Upper body is manageable; lower body is problematic.",
            option:
              "(4e) Needs assistance to be able to get in or out of a bath or shower",
            justification:
              "FH: Requires assistance with getting in and out of the shower and uses environmental supports for stability."
          }
        },
        {
          content: {
            name: "Managing toilet needs",
            description:
              "The claimant experiences daily bladder incontinence and uses adult pads. They rely on a sink for support when using the toilet and struggle with personal hygiene due to back pain.\n\n"
              + "Wipes are used and their wife assists at times. Incontinence started after prostatectomy. On good days they only change underwear; on bad days leakage reaches bed sheets, requiring multiple changes with spousal help for laundry.",
            option:
              "(5b) Needs to use an aid or appliance to be able to manage toilet needs or incontinence",
            justification:
              "HOC: Ongoing bladder incontinence with pad use.\n\n"
              + "FH: Physical support needed when using the toilet, hygiene difficulties due to pain, reliance on wipes and occasional assistance.\n\n"
              + "SOH: Ground‑floor living due to toilet access and mobility limits."
          }
        },
        {
          content: {
            name: "Dressing and undressing",
            description:
              "Changes clothes daily but has significant difficulties due to incontinence. Needs to lie on the bed to put on pants; this takes a long time.\n\n"
              + "Requires assistance from wife for socks and shoes. Bending down is difficult due to back pain radiating to hips, recent surgery, and incontinence. Upper body dressing is independent (buttons and zips manageable).",
            option:
              "(6b) Needs to use an aid or appliance to be able to dress or undress",
            justification:
              "FH: Requires assistance with lower‑body dressing due to pain and incontinence; time‑consuming dressing routines suggest functional restriction."
          }
        },
        {
          content: {
            name: "Communicating verbally",
            description:
              "No reported hearing impairment and no hearing aids. Able to use a mobile phone and converse normally; no significant hearing difficulties reported.\n\n"
              + "Overall, no issues with verbal communication.",
            option:
              "(7a) Can express and understand verbal information unaided",
            justification:
              "FH: No hearing concerns; normal phone use and conversation.\n\n"
              + "IO: Speech clear, normal rate and volume; adequate information provided without prompting.\n\n"
              + "MSO: Able to convey and understand verbal information in native language."
          }
        },
        {
          content: {
            name: "Reading and understanding signs, symbols and words",
            description:
              "Able to read and understand signs, symbols and words. Wears glasses daily (separate pairs for distance and near) and reads medical/appointment letters independently.\n\n"
              + "No issues with this activity are indicated.",
            option:
              "(8a) Can read and understand basic and complex written information either unaided or using spectacles or contact lenses",
            justification:
              "(FH): Uses spectacles and reads correspondence independently.\n\n"
              + "This supports the ability to read and understand both basic and complex written information."
          }
        },
        {
          content: {
            name: "Engaging face to face",
            description:
              "Bladder incontinence and back pain have significantly reduced social activities. Fear of accidents has led to loss of confidence in public settings and reduced social life.\n\n"
              + "Avoids drinking before medical appointments to reduce risk of incontinence. Stopped physical activities previously enjoyed. Currently has limited social engagement but remains hopeful of improvement.",
            option: "(9a) Can engage with other people unaided",
            justification:
              "(IO): Adequate rapport and coped well during phone interview.\n\n"
              + "(FH): No evidence that engagement with others requires assistance."
          }
        },
        {
          content: {
            name: "Budgeting",
            description:
              "Handles finances independently using direct debit for bills and online banking for transfers and account management.\n\n"
              + "Uses a card for daily purchases and typically manages change without issues.",
            option: "(10a) Can manage complex budgeting decisions unaided",
            justification:
              "(FH): Independent management of finances, banking and payments demonstrates ability to make budgeting decisions without assistance."
          }
        },
        {
          content: {
            name: "Planning and following journeys",
            description:
              "Largely housebound due to bladder incontinence and lower back pain. Leaves home mainly for medical appointments and relies on wife for transport due to difficulty with public transport.\n\n"
              + "Needs to stay near a toilet at all times; a recent shopping trip led to a humiliating incontinence incident.",
            option:
              "(11a) Can plan and follow the route of a journey unaided",
            justification:
              "(FH): Housebound pattern with reliance on spouse for travel due to symptoms.\n\n"
              + "No corroborating evidence in HOC, SOH, MH, MSO, or IO to support selecting a more limited journey‑planning descriptor."
          }
        },
        {
          content: {
            name: "Moving around",
            description:
              "Significant mobility issues reported: difficulty walking and shuffling between rooms using furniture and kitchen island for support.\n\n"
              + "Mostly stays at home. Outside, can only walk slowly a few yards to the car. Occasionally goes to the backyard for fresh air but can only manage 1–3 minutes of slow walking before stopping to hold onto something due to pain.",
            option:
              "(12c) Can stand and then move unaided more than 20 metres but no more than 50 metres",
            justification:
              "FH: Indoor furniture walking, very short outdoor distances, frequent stops due to pain.\n\n"
              + "SOH: Crawls upstairs at night; difficulties with housework and shopping; embarrassment and pain with daily activities.\n\n"
              + "HOC: Back pain/sciatica triggered by walking, twisting and slight bending most days; cannot sit >20 minutes; frequently changes position.\n\n"
              + "Taken together, this supports an ability to move unaided >20m but ≤50m safely, to an acceptable standard, repeatedly and within a reasonable time on most days."
          }
        }
      ]
    }
  ]
};