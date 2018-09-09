import React, { Component } from 'react';

class DailyUpdateForm extends Component {
	render() {
		return (
			<div className="update-form padding">
				<div className="container">
					<div className="update-form__container">
						<form>
							<legend className="text-center">Tell us what you have done today</legend>
							<div>
								<input type="url" className="form-control" id="" placeholder="Twitter Url" />
								<input type="url" className="form-control" id="" placeholder="Blog Url" />
								<textarea type="text" className="form-control" rows="5" id="" placeholder="Reflection" />
							</div>
							<div class="text-right">
								<button type="submit" className="btn btn-primary">Post my update</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default DailyUpdateForm;

