import UpdateForm from "../../../components/updateForm/Update";
import styles from "./updatePost.module.css";

const baseUrl = "http://localhost:3000";

export default async function UpdatePage({ params }) {
  const { id } = params;
  //   const [data, setData] = useState("");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  //       const data = await res.json();

  //       setData(data);
  //     };

  //     fetchData();
  //   }, []);

  const getData = async () => {
    const res = await fetch(`${baseUrl}/api/posts/${id}`);
    // const res = await fetch(`/api/posts/${id}`);
    const data = await res.json();

    return data;
  };

  console.log(await getData());

  return (
    <div>
      <UpdateForm data={await getData()} id={id} />
    </div>
  );
}
