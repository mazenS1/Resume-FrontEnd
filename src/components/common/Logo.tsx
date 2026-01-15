interface LogoProps {
  size?: 'small' | 'large';
}

export function Logo({ size = 'large' }: LogoProps) {
  return (
    <div className={`logo-integrated ${size === 'small' ? 'logo-small' : ''}`}>
      <div className="logo-icon">
        <div className="profile-circle"></div>
        <div className="logo-lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </div>
      <span className="logo-text">سيرة</span>
    </div>
  );
}
