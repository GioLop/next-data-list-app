const TEXTS = {
  NAME: 'Name',
  JOB: 'Job',
  ADDRESS: 'Address'
};

export default function TableHeader () {
    return (
        <div className="grid grid-cols-[1.5fr_2fr_3fr] gap-6 border-y border-black py-4 text-sm font-semibold tracking-wide">
            <div>{ TEXTS.NAME }</div>
            <div>{ TEXTS.JOB }</div>
            <div>{ TEXTS.ADDRESS }</div>
        </div>
    )
}