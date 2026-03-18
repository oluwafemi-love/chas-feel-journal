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
  1. Modular Component Architecture
We adopted a modular approach to enable component reusability across the application. This improves maintainability, scalability, and makes it easier to extend features as the project evolves.

2. Hybrid Styling Approach (CSS + Tailwind)
Each component typically includes both a .jsx and a .css file, despite having Tailwind CSS installed.
This decision allows us to:

* Use Tailwind for rapid, utility-based styling

* Leverage vanilla CSS for more complex or custom designs
Additionally, this approach accommodates varying developer preferences and workflows.

3. Routing with TanStack
We chose TanStack Router for handling routing due to its support for file-based routing and strong type safety. This enhances developer experience and reduces potential runtime errors.

4. State Management with Context API
The React Context API is used to manage and share state across components. This helps us avoid excessive prop drilling and keeps the data flow clean and manageable.

5. Use of Dummy Data for Development
The data stored in the project’s data folder is currently mock data, used to get the application up and running quickly.
However, the architecture has been designed with scalability in mind, ensuring that authentication and real user data can be integrated seamlessly in future development phase

## ACCESSIBILITY: PRINCIPLES & IMPLEMENTATION

We adhere to accessibility guidelines in various ways in the project, some of them are:

1. Color & Contrast
We ensured that all color combinations maintain sufficient contrast between text and background elements. This improves readability for users with visual impairments and aligns with accessibility standards.

2. Keyboard Navigation
All interactive elements, especially form inputs, are fully focusable and accessible via keyboard. This enables seamless navigation using the Tab key and supports users who rely on non-mouse interactions.

3. Responsive Design
The application is designed to be fully responsive across mobile, tablet, and desktop devices. This ensures consistent usability regardless of screen size or device type.

4. Readable Typography & UI Clarity
We prioritized legible typography, appropriate font sizes, and clear visual hierarchy to enhance readability and reduce cognitive load.

5. Accessible UI Components
For more complex interface elements that require robust accessibility handling, we leveraged Radix UI. This allows us to implement components that follow established accessibility patterns without reinventing them from scratch.
   
* Figure (Images):


## Workflow
1. We started the project by designing the UIs and highlighting the app flow. Figma was used for this.
2. Then tickets were created on Trello
3. Then development started.
Important to mention; The process from 1 - 3 is iterative, rather than water-fall kindof approach. The team adjusted accordingly to the dynamics of the process.

* Figure (Images) :