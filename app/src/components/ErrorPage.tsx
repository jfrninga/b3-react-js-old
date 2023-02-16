import { useEffect } from "react"
import { useNavigate, useRouteError } from "react-router-dom"

export function ErrorPage() {
    const error = useRouteError()
    const navigate = useNavigate()

    useEffect(() => {
        if (
            // check that the error is of type object
            typeof error === 'object' &&

            // since null is considered an object, we need to check that it is
            error !== null &&

            // check that the error has a status property
            'status' in error &&

            // check that the status is 401
            error.status === 401
        ) {
            // redirect to login
            navigate("/login")
        }
    }, [])

    return (
        <>
            <h1>Error</h1>
            <p>{error instanceof Error ? error.message : 'Unknown error'}</p>
        </>
    )
}