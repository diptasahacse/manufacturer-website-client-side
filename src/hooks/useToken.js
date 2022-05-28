import { useEffect, useState } from 'react'
import { format } from 'date-fns';
const useToken = (email) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const lastLoginTime = format(new Date(), 'Pp');
        const currentUser = { email, lastLoginTime };

        if (email) {
            fetch(`https://infinite-chamber-43931.herokuapp.com/user/${email}`, {
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

    }, [email])


    return [token];

}
export default useToken;