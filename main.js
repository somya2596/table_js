

function GenerateTable() {
    var myContacts = [
        { "Firstname": "somya ", "Lastname": "golchha ", "Email": "golchhasomya@gmail.com","Designation":"student","Phone no.": "8449104551","DOB":"25/10/1996" },
        { "Firstname": "twinkle ","Lastname": "bhardwaj ", "Email": "twinkle@gmail.com","Designation":"student", "Phone no.": "9091929394","DOB":"20/01/1996" },
        { "Firstname": "harsh","Lastname": "jain ", "Email": "harsh@gmail.com","Designation":"student", "Phone no.": "8081828384","DOB":"21/02/1996" },
        { "Firstname": "shantanu ","Lastname": "rawat ", "Email": "shantanu@gmail.com","Designation":"student", "Phone no.": "9091929394","DOB":"22/03/1996" },
        { "Firstname": "aaditya ", "Lastname": "chopra ","Email": "aaditya@gmail.com","Designation":"student", "Phone no.": "9091929394","DOB":"23/04/1996" },
        { "Firstname": "diksha ", "Lastname": "singh ","Email": "diksha@gmail.com","Designation":"student","Phone no.": "9091929394","DOB":"24/05/1996" },
        { "Firstname": "deeksha ","Lastname": "arora ", "Email": "deeksha@gmail.com","Designation":"student", "Phone no.": "9091929394","DOB":"25/06/1996" },
        { "Firstname": "mansi ","Lastname": "golchha ", "Email": "mansi@gmail.com","Designation":"student", "Phone no.": "9091929394","DOB":"26/07/1996" }
    ];

     var noOfContacts = myContacts.length;

        if (noOfContacts > 0) {


            // CREATE DYNAMIC TABLE.
            var table = document.createElement("table");
           
            // retrieve column header ('Name', 'Email', and 'Mobile')

            var col = []; // define an empty array
            for (var i = 0; i < noOfContacts; i++) {
                for (var key in myContacts[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            // CREATE TABLE HEAD .
            var tHead = document.createElement("thead");


            // CREATE ROW FOR TABLE HEAD .
            var hRow = document.createElement("tr");

            // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                hRow.appendChild(th);
            }
            tHead.appendChild(hRow);
            table.appendChild(tHead);

            // CREATE TABLE BODY .
            var tBody = document.createElement("tbody");

            // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
            for (var i = 0; i < noOfContacts; i++) {

                var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .


                for (var j = 0; j < col.length; j++) {
                    var td = document.createElement("td");
                    td.innerHTML = myContacts[i][col[j]];
                    bRow.appendChild(td);
                }
                tBody.appendChild(bRow)

            }
            table.appendChild(tBody);
            table.setAttribute("border", "2");


            // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
            var divContainer = document.getElementById("my_contacts");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
            function init() {
                var sorter = tsorter.create('TABLE-ID');
            }
                
            window.onload = init;
        }
        init();

    }
    



