import { useEffect, useState } from "react"
const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_API_KEY}/admin/${email}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.admin);
                setAdminLoading(false)
            })
    }, [email])
    return [isAdmin, adminLoading];


}
export default useAdmin;