import { styles } from "./styles";
const ListStatus = ({status, title, filtered}) => {
  return (
    <div className="flex gap-4 flex-col items-center justify-center ">
        <h2 className="text-xl p-3 rounded-md border-b border-gray-500 mb-4 ">{title}</h2>
        {
            status.filter(filtered)
            .map((list) => {
                return <input type="text" readOnly key={list.id}
                value={list.name}
                className={`${styles.inputBox} text-xl`} />;
              })
        }
    </div>
  )
}


export default ListStatus