import PropTypes from "prop-types";

function StatBadge({ label, value }) {
  return (
    <div className="stat-badge">
      <p className="stat-label">{label}</p>
      <h3>{value}</h3>
    </div>
  );
}

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default StatBadge;