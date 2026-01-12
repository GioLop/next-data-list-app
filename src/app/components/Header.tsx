const TEXTS = {
  APP_TITLE: 'Data List',
  NAME: 'Name',
  JOB: 'Job',
  ADDRESS: 'Address'
};

export default function Header() {
    return (
        <>
            <h1>{TEXTS.APP_TITLE}</h1>
                  
            <div>
                <div>{ TEXTS.NAME }</div>
                <div>{ TEXTS.JOB }</div>
                <div>{ TEXTS.ADDRESS }</div>
            </div>
        </>
    )
}