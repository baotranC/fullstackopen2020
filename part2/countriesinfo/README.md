# Part 2: Communicating with server, countriesinfo

This application allows you to search various countries. The country to be shown is found by typing a search query into the search field.

## countriesinfo

- If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:

    ![](/part2/images/P2_EX_countriesinfo.JPG)

- If there are ten or fewer countries, but more than one, then all countries matching the query are shown:

    ![](/part2/images/P2_EX_countriesinfo1.JPG)

- If there is only one country matching the query, then the basic data of the country are shown:

    ![](/part2/images/P2_EX_countriesinfo2.JPG)

- If there is none of the country matching the query:

    ![](/part2/images/P2_EX_countriesinfo3.JPG)


## Run 
- `npm start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run server`
Runs the json server.<br />
Open [http://localhost:3001/persons](http://localhost:3001/persons) to view the persons stored in the database.

