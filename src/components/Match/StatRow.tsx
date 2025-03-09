
import './Match.css';
type StatRowProps ={
    label:string;
    value:string|number
}
export const StatRow = ({ label, value }:StatRowProps) => (
    <div className='info-item'>
    <p >
      <span className="primary">{label}:</span> {value}
    </p>
    </div>
  );