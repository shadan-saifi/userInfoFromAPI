import { useEffect, useState } from "react";

function useInfoProfile(ids) {

    const [user2, setUser2] = useState('')
    const [error2, setError2] = useState(false);
    const [loading2, setLoading2] = useState(false);


    useEffect(() => {

        (async () => {
            setLoading2(true)
            setError2(false)
            try {
                const response = await fetch(`https://jsonplaceholder.org/posts/${ids}`)

                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json()
                setUser2(data)
            } catch (error) {
                console.log(error.message)
                setError2(true)
            } finally {
                setLoading2(false)
            }
        })()
    }, [ids])

    return [user2, error2, loading2]
}
export default useInfoProfile