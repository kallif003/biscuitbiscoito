import styled from "styled-components"

export const ContainerPraise = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 3rem 10rem 0;
	@media (min-width: 0px) and (max-width: 767px) {
		flex-direction: column;
		margin-right: 1.1rem;
		margin-bottom: 5rem;
	}
`

export const CardPraise = styled.div`
	border-color: #9a9a9a;
	border-width: 1px;
	align-content: center;
	width: 17rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 0.5rem;
	padding-block: 1rem;
	margin-left: 1rem;
	height: 25rem;
	@media (min-width: 0px) and (max-width: 767px) {
		width: 15rem;
		margin-bottom: 1rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		width: 13.9rem;
	}
`

export const DivImgPraise = styled.div.attrs(
	(props: { color: string }) => props
)`
	background: ${(props) => props.color};
	border-radius: 0.5rem;
	width: 5.2rem;
	height: 4.8rem;
	margin-right: 4rem;
	display: flex;
	align-items: flex-end;
	justify-content: center;
`

export const ContainerImg = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 8rem;
	width: 100%;
`
export const ContainerText = styled.div`
	width: 15rem;
	text-align: center;
	@media (min-width: 0px) and (max-width: 767px) {
		width: 10rem;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		width: 12rem;
	}
`
