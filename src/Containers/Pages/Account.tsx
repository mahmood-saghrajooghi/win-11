import { Collapse, Pre } from "@blueprintjs/core";
import React, { useState } from "react";
import { FaChevronRight, FaCog } from "react-icons/fa";
import { MdCheck, MdClear } from 'react-icons/md';
import FormGroup from "../../Components/Form/FormGroup";
import Input from '../../Components/Form/Input';
import Col from "../../Components/Grid/Col";
import Container from "../../Components/Grid/Container";
import Row from "../../Components/Grid/Row";


const Account: React.FC = () => {
	const [isActiveOne, setIsActiveOne] = useState<boolean>(false);
	const [isActiveTow, setIsActiveTow] = useState<boolean>(false);

	return (
		<Container size="sm">
			<div className="profile-container">
				<div className={["profile-item", isActiveOne ? "active" : ""].join(' ')}>
					<button className="toggle-btn" onClick={() => { setIsActiveOne(isActive => !isActive) }}>
						<FaChevronRight className="icon" />
						Profile Settings
					</button>
				</div>
				<div className={["profile-item", isActiveTow ? "active" : ""].join(" ")}>
					<button className="toggle-btn" onClick={() => { setIsActiveTow(isActive => !isActive) }}>
						<FaChevronRight className="icon" />
						Profile Settings
						<div className="ml-auto">
							<FaCog />
						</div>
					</button>
					<Collapse isOpen={isActiveTow}>
						<Pre>
							<Row>
								<Col md="12">
									<h3 className="heading">
										User Info
									</h3>
								</Col>
								<Col md="6">
									<FormGroup label="First Name" className="label-transparent" labelClassName="profile-form-label">
										<Input
											block
											className="bg-white"
											value=""
											changed={() => false} />
									</FormGroup>
								</Col>
								<Col md="6">
									<FormGroup label="Last Name" className="label-transparent" labelClassName="profile-form-label">
										<Input
											block
											className="bg-white"
											value=""
											changed={() => false} />
									</FormGroup>
								</Col>
								<Col md="6">
									<FormGroup label="Phone Number" className="label-transparent" labelClassName="profile-form-label">
										<Input
											block
											className="bg-white"
											value=""
											changed={() => false} />
									</FormGroup>
								</Col>
								<Col md="6">
									<FormGroup label="Email" className="label-transparent" labelClassName="profile-form-label">
										<Input
											block
											className="bg-white"
											value=""
											changed={() => false} />
									</FormGroup>
								</Col>
							</Row>
							<footer className="profile-item-footer">
								<button className="action-btn cancel-btn">
									<MdClear className="icon" />
									Cancel
								</button>
								<button className="action-btn save-btn">
									<MdCheck className="icon" />
									Save Changes
								</button>
							</footer>
						</Pre>
					</Collapse>
				</div>
			</div>
		</Container>
	)
}

export default Account;