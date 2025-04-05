document.addEventListener('DOMContentLoaded', function(){

    const usernameInput = document.querySelector('.username');
    const searchBtn = document.querySelector('.btn');
    

    function validateUsername (username){
        // console.log(username);
        
        if(username.trim() === ""){
            alert("Username sould not be empty");
            return false;
        }
        const regex = /^[a-zA-Z][a-zA-Z0-9_]{3,14}$/;
        const isMatching = regex.test(username);

        if(!isMatching){
            alert("Invalid Username");
        }

        return isMatching;
    }

    const fetchUserDetails = async (username) =>{


        const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
        const targetUrl = 'https://leetcode.com/graphql/';
        
        const myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");

        const graphql = JSON.stringify({
            query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
            variables: { "username": `${username}` }
        })
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: graphql,
        };

        const response = await fetch(proxyUrl+targetUrl, requestOptions);
        // if(!response.ok) {
        //     throw new Error("Unable to fetch the User details");
        // }
        console.log(response.json());
        
            
    }

    searchBtn.addEventListener('click',() =>{
        const username = usernameInput.value;
        if(validateUsername(username)){
            fetchUserDetails(username);
        }
    })








})