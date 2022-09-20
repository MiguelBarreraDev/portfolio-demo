import './styles/ActionButton.css'

export default function ActionButton ({ href, label, renderIcon, addStyles='' }) {
  return (
    <a href={href} className={`action-button ${addStyles}`} target='_blank'>
      {renderIcon && <div className="ctn-icon">{renderIcon}</div>}
      {label}
    </a>
  )
}
