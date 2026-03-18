# Feel Journal

This project is a Minimum Viable Product (MVP) of a modern journaling web application designed to make reflective writing frictionless through Speech-to-Text technology.

By integrating advanced speech recognition, users can effortlessly translate their thoughts into written entries in real time. The application is enhanced with thoughtfully designed features that create a natural, seamless, and distraction-free journaling experience.

The goal is simple: remove barriers between thought and expression.


### Tech Stack
- React

- JavaScript (ES6+)

- Tailwind CSS

- CSS

### Tools
- ApyHub for Speech-to-Text processing

- Radix for COMPLEX UI elements & accessibility
    
- Trello for Management



## Project Structure

<code>
📂 src/
├── 📂 assets/
│   ├── 📂 images/
│
├── 📂 components/
│   ├── 📂 AddJournalBySpeech/
│   │   ├── AddJournalBySpeech.css
│   │   ├── AddJournalBySpeech.jsx
│   ├── 📂 Journal/
│   │   ├── Journal.css
│   │   ├── Journal.tsx
│   ├── 📂 AppLayout/
│   │   ├── Layout.css
│   │   ├── Layout.jsx
│   ├── 📂 [Many more components...]
│   │
├── 📂 config/
│   │── apiConfig.js
│   │
├── 📂 constants/
│   ├── 📂 Icons
│   │   ├── index.jsx
│   │ 
├── 📂 context/
│   │── JournalContext.jsx
│   │ 
├── 📂 data/
│   ├── 📂 AllJournals.js
│   ├── 📂 AllQuotes.js
│   ├── 📂 AllUsers.js
│   │ 
├── 📂 hooks/
│   │── useSpeechRecorder.js
│   │ 
├── 📂 routes/
│   ├── 📂 MyFavourites/
│   ├── 📂 MyJournals/ 
│   ├── 📂 ProfilePage/
│   ├── 📂 QuotesPage/
│   ├── 📂 Trashs/   
│   │── __root.tsx
│   │── index.tsx
│   │ 
├── 📄 main.css
├── 📄 main.jsx
├── 📄 routeTreegen.ts

</code>

* Why We choose to stucture our project this way
   1.  We want to be able to reuse components, hence our decision to go modular
   2.  In almost all component folder, there is a .jsx & .css eventhough we have Tailwind installed. We have chosen this approach to leverage vanilla css for complex styling and Tailwind for simple styling. Also, the preference of the Developer impacts this decision.
   3.  We decided to use Tanstack for our routing needs, because it offers file-based routing setup and type-safety. 
   4.  We used the context API so that we can share the data across components without complex prop-drilling
   5.  The data in data folder are dummy data to get the project up & running, however the code was written in manner to make auth seamless to implement, so that different users can use the web app in future development.

## ACCESSIBILITY: PRINCIPLES & IMPLEMENTATION

We adhere to accessibility guidelines in various ways in the project, some of them are:

1. Color: We ensured the color have good contrast
2. Keyboard: Input Elements are focusable, thereby making tabbing through keyboard seamless
3. Respnsiveness:  We aimed for responsive layout across mobile, tablet and desktop platform
4. Others: We ensured text are legible, for UI elements that are otherwise complex to build from scratch with respect to accessibility, we leverage Radix library.
   
* Picture Reference


## Workflow
1. We started the project by designing the UIs and highlighting the app flow. Figma was used for this.
2. Then tickets were created on Trello
3. Then development started.
Important to mention; The process from 1 - 3 is iterative, rather than water-fall kindof approach. The team adjusted accordingly to the dynamics of the process.

* Picture Reference: