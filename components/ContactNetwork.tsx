type ContactNetworkProps = {
  email: string;
  phone: string;
};

export default function ContactNetwork({ email, phone }: ContactNetworkProps) {
  return (
    <div className="contact-network" aria-label="Contact network">
      <p className="network-status"><span className="network-rest">Connecting</span><span className="network-active">Connected</span></p>
      <svg viewBox="0 0 290 220" role="img" aria-label="Interactive network connecting email and phone">
        <path className="network-line line-one" d="M145 26 71 94 145 150 219 94 145 26" />
        <path className="network-line line-two" d="M71 94 145 150 145 204" />
        <path className="network-line line-three" d="M219 94 145 150 145 204" />
        <circle className="network-node node-top" cx="145" cy="26" r="8" />
        <a href={`mailto:${email}`} aria-label="Email Dhvani">
          <circle className="network-node node-email" cx="71" cy="94" r="10" />
          <text className="network-label label-email" x="25" y="125">EMAIL</text>
        </a>
        <a href={`tel:${phone}`} aria-label="Call Dhvani">
          <circle className="network-node node-phone" cx="219" cy="94" r="10" />
          <text className="network-label label-phone" x="198" y="125">PHONE</text>
        </a>
        <circle className="network-node node-center" cx="145" cy="150" r="9" />
        <circle className="network-node node-bottom" cx="145" cy="204" r="7" />
      </svg>
      <p className="network-hint">Hover to connect</p>
    </div>
  );
}
