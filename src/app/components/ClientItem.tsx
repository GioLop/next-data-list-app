type ClientItemProps = {
    name: string;
    job: string;
    address: string;
}

export default function ClientItem({name, job, address}:ClientItemProps) {
    return (
        <div>
            <div>{name}</div>
            <div>{job}</div>
            <div>{address} </div>
        </div>
    );
}