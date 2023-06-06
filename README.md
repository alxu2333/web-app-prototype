**WORKFLOW**

_Disclaimer_: Unfortunately, I was locked out of my github account due to some personal and email related errors. Thus, I do not have any version control nor commit history. Although I understand entirely why I should be marked down, as I have not met the criteria, I would also appreciate any lenience that could be spared.

Initially the plan was to complete it frontend (HTML and CSS primarily) then backend (JS), due to higher familiarity levels with the former two programming languages. However, it was soon made evident that this, although a viable solution, wouldn't be the most effective (for me personally), as without confirming the functionality of the code, the threat of having to redo a large amount of code due to a mistake or potentially wasting code was very prominent. Thus, the approach taken was a much more well-rounded one, forming and completing parts of the web application one at a time, across all three coding languages and files. This was done after making a rough draft as to how sessions were to be structured. This helped a lot in terms of keeping on track and making sure parts of the web application actually came into fruition. Another approach taken was by commenting out unnecessary code (at the time) rather than deleting. This allowed more creative freedom and made double-checking code a lot more efficient. After completion of the code, double-checking was a necessary step, and then cleaning up the code for easier viewing were the steps taken.

**SESSION 1-3**

The goal was to have a very minimalistic tracker page, which would help you track your fitness and strength across multiple sessions, with preset terms in place for you, namely "exercise, sets, reps and weights". The title was simply named "fitness tracker" for ease of understanding, with a very 'blocky' sans serif font without much flare, to emphasise the element of minimalism (https://imgur.com/a/rrBkckX). A simple dropdown menu with a form for user inputted information was also made. However, only the form was formatted with CSS in the first few sessions, optimising spacing and font choices. A bit of JS was also done, in order to allow each individual dropdown option to have the thumbnail image change. However, apart from image changing, it didn't have any other significant effect on the web application yet.

**SESSION 4-5**

Since no backend JS was required, most of the focus was put into optimising code in HTML and CSS, while building further onto the website. Through some peer feedback, certain changes were made. Some more notable ones include how the dropdown menu had to be changed that fit more thematically and that the spacing under the boxes were too large. A button was also made, with a hover effect over it to improve user feel of the web application. The choice of having the button to be black, was for it to stand out from the rest of the page, since some users stated that despite the direction of the page leading to it (so they didn't miss it), they would prefer it to be bolder, and stand out more for easier clarification (https://imgur.com/2X4SHR8)

**SESSION 6-9**

Before the backend was started, some placeholder text was used to format the 'RESULTS' section. This way it would've been easier to see if the code was functional and linking properly. The backend was all completed on JS. Here are the important parts completed (in order - this was so that effective testing could be done):
* created a function which would retrieve an existing list if the key was in the localStorage, or create a new list if none existed
* retrieve document elements
* an 'EventListener' that would execute on button click, adding new entries to the list and updating the localStorage list
* built further upon the thumbnail image change, allowing it to also refresh data for each individual muscle group, effectively creating separate categories

**SESSION 10-11**

Mainly removing the placeholder text from HTML, and replacing it with the user inputted information upon button click. More optimisation of spacing in CSS was done.

**SESSION 12-14**

Double-checking code, missing features added (such as a button to delete tracked items). Optimising code, such as abstracting functionality to a new function, in order to reduce code repetition. Some lessons learnt include always knowing the functionality of the code. There were quite a few instances of unnecessary lines of code, which could have been avoided if understanding of code was better. If time schedule allows it, finishing off every session with a bit of code optimisation would also make reading and understanding code a lot smoother. Adding comments on unclear areas to add further clarity, whether for future reference or to memorise what certain functions do also helped a lot.


**WEB APPLICATION**

Further improvements of web application would include building further onto the web application without cluttering it. Some ideas include a collapsible notes section, which would allow users to write down some brief notes, which they could access and delete anytime as it would persist across sessions. Another example would be adding customisable options for convenience of the user, such as including weight change from kilograms to pounds. Some other areas of improvement could include making it more optimised for mobile devices, and removing clutter in some areas.

The application in all, has frontend on HTML - with almost every aspect of the web application (apart from showing users their inputted information) made on HTML - styling all on CSS, and backend all on JS, which takes the users inputted data, stores them in local storage, and relays it out back onto the web application in a neat and orderly manner.