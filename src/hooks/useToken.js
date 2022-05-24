import { useEffect, useState } from 'react'
import { format } from 'date-fns';
const useToken = (user) => {
    const [token, setToken] = useState('');
    // console.log(user?.user.email)
    useEffect(() => {
        const email = user?.user.email;
        const lastLoginTime = format(new Date(), 'Pp');
        const currentUser = { email, lastLoginTime };

        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(currentUser)

            })
                .then(res => res.json())
                .then(data => {

                    const accessToken = data.token;
                    localStorage.setItem("accessToken", accessToken)
                    setToken(accessToken)


                })

        }

    }, [user])


    return [token];

}
export default useToken;