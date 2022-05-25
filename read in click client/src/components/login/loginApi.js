
export const signUpApi = (user) => {
    return fetch(`http://localhost:3001/signUp`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user),
    })
        .then(response => {
            if (response.ok) {
                response.json()
                    .then(() => {
                        console.log(user)
                    })
            } else {
                response.json()
                    .then(() => error1 => { alert(JSON.stringify(error1.errors)) }).catch(error => { console.log(error); });
            }
        })
}

// export const signInApi = (user) => {
//     //console.log("user", user);
//     return fetch(`http://localhost:3001/signInById/${user}`, {
//         method: "GET",
//         // headers: {
//         //     'Content-Type': 'application/json;charset=utf-8'
//         // },
      
//     })
//         .then(response => {
//             if (response.ok) {
//                 debugger
//                 console.log(response.body);
//                 response.json()
//                     .then(() => {
//                         console.log(user.name);
//                     })
//             } else {
//                 response.json()
//                     .then(() => error1 => { alert(JSON.stringify(error1.errors)) }).catch(error => { console.log(error); });
//             }
//         })
// }

