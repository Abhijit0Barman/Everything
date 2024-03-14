import "./App.css";
import { useQuery, gql } from "@apollo/client";

const query = gql`
    query Query {
        getTodos {
            title
            completed
            user {
                name
                email
                phone
            }
        }
    }
`;

function App() {
    const { loading, error, data } = useQuery(query);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    console.log(data);
    return (
        <>
            <table>
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    {data.getTodos.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
