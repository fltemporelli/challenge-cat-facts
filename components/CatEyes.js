import styles from './CatEyes.module.css'

const CatEyes = () => (
	<div className={styles.image}>
		<svg version="1.1" id="cat-eyes" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
		viewBox="0 0 1920 620" xmlSpace="preserve">	
		  <filter id="f1" x="0" y="0">
      	<feGaussianBlur in="SourceGraphic" stdDeviation="4" />
    	</filter>
			<mask id="m1">
				<path className="st7" fill="white" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" d="M744.01,555.38c-101.77,67.92-223.88,71.73-299.74,15.77c-67.08-49.48-106.09-151.65-66.21-200.2
						c43.5-52.96,169.65-28.42,244.41,17.37C736.19,457.97,749.27,587.98,751,608.63"/>
					<path className="st7" fill="white" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" d="M1078.9,555.38c100.46,67.92,220.99,71.73,295.88,15.77c66.22-49.48,104.72-151.65,65.36-200.2
						c-42.94-52.96-167.46-28.42-241.26,17.37c-112.26,69.65-125.17,199.66-126.88,220.31"/>
				</mask>
			<g>
				<path className="st7" mask="url(#m1)"  fill="#367219" d="M744.01,555.38c-101.77,67.92-223.88,71.73-299.74,15.77c-67.08-49.48-106.09-151.65-66.21-200.2
					c43.5-52.96,169.65-28.42,244.41,17.37C736.19,457.97,749.27,587.98,751,608.63"/>
				<path className="st7" mask="url(#m1)" fill="#105D72" d="M1078.9,555.38c100.46,67.92,220.99,71.73,295.88,15.77c66.22-49.48,104.72-151.65,65.36-200.2
					c-42.94-52.96-167.46-28.42-241.26,17.37c-112.26,69.65-125.17,199.66-126.88,220.31"/>
			</g>
			<g>
				<path className="st1" mask="url(#m1)"  filter="url(#f1)" fill="#85DFFF" stroke="#105D72" strokeWidth="6" strokeMiterlimit="10" d="M1425,468.5c-0.24,73.71-78.38,124.74-143.22,130c-12.45,1.01-88.88,5.56-125.28-53
					c-22.02-35.43-21.82-81.78-2.52-116c17.32-30.72,45.04-42.98,74.92-56c29.85-13.01,72.57-31.84,116.78-17
					C1396.22,373.46,1425.14,424.02,1425,468.5z"/>
				<path className="st2" mask="url(#m1)"  filter="url(#f1)" fill="#5AE520" stroke="#367219" strokeWidth="6" strokeMiterlimit="10" d="M401.73,470.5c0.24,73.71,78.38,124.74,143.22,130c12.45,1.01,88.88,5.56,125.28-53
					c22.02-35.43,21.82-81.78,2.52-116c-17.32-30.72-45.04-42.98-74.92-56c-29.85-13.01-72.57-31.84-116.78-17
					C430.51,375.46,401.59,426.02,401.73,470.5z"/>
			</g>
			<g>
				<ellipse fill="#367219" className={styles.greencircle} filter="url(#f1)"  mask="url(#m1)" cx="544" cy="461.5" rx="56.5" ry="114"/>
				<ellipse fill="#105D72" className={styles.greencircle} filter="url(#f1)"  mask="url(#m1)"  cx="1283" cy="457.5" rx="56.5" ry="114"/>
			</g>
			<g>
				<ellipse stroke="#000000" className={styles.blackcircle} filter="url(#f1)"  mask="url(#m1)" strokeMiterlimit="10" cx="544" cy="456.5" rx="31.5" ry="118"/>
				<ellipse stroke="#000000"className={styles.blackcircle}  filter="url(#f1)"  mask="url(#m1)" strokeMiterlimit="10" cx="1282" cy="448.5" rx="31.5" ry="108"/>
			</g>
			<g>
				<circle fill="#FFFFFF" className={styles.circle} mask="url(#m1)" cx="1347.5" cy="511.5" r="50.5"/>
				<circle fill="#FFFFFF" className={styles.circle} mask="url(#m1)" cx="482.5" cy="527.5" r="50.5"/>
				<circle fill="#FFFFFF" className={styles.circle} mask="url(#m1)" cx="625.5" cy="423.5" r="28.5"/>
				<circle fill="#FFFFFF" className={styles.circle} mask="url(#m1)" cx="1197.5" cy="420.5" r="28.5"/>
			</g>
			<g>
				<path className="st7" fill="none" stroke="#FFFFFF" opacity="0.6" strokeWidth="3" strokeMiterlimit="10" d="M744.01,555.38c-101.77,67.92-223.88,71.73-299.74,15.77c-67.08-49.48-106.09-151.65-66.21-200.2
					c43.5-52.96,169.65-28.42,244.41,17.37C736.19,457.97,749.27,587.98,751,608.63"/>
				<path className="st7" fill="none" stroke="#FFFFFF" opacity="0.6" strokeWidth="3" strokeMiterlimit="10" d="M1078.9,555.38c100.46,67.92,220.99,71.73,295.88,15.77c66.22-49.48,104.72-151.65,65.36-200.2
					c-42.94-52.96-167.46-28.42-241.26,17.37c-112.26,69.65-125.17,199.66-126.88,220.31"/>
			</g>
		</svg>
	</div>
)

export default CatEyes