import { useEffect, useState } from "react";

function useInfoUser(ids) {

    const [user, setUser] = useState('')
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        (async () => {
            setLoading(true)
            setError('')
            try {
                const response = await fetch(`https://jsonplaceholder.org/users/${ids}`)

                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json()
                setUser(data)
            } catch (error) {
                console.log(error.message)
                setError(true)
            } finally {
                setLoading(false)
            }
        })()
    }, [ids])

    return [user, error, loading]
}
export default useInfoUser