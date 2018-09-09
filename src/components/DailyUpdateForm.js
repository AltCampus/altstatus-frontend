import React, { Component } from 'react';

class DailyUpdateForm extends Component {
	render() {
		return (
			<div class="update-form padding">
				<div class="updat-form__container container">
					<form>
						<legend class="text-center">Tell us what you have done today</legend>
						<div>
							<input type="url" class="form-control" id="" placeholder="Twitter Url" />
							<input type="url" class="form-control" id="" placeholder="Blog Url" />
							<textarea type="text" class="form-control" rows="5" id="" placeholder="Reflection" />
						</div>
						<div class="text-right">
							<button type="submit" class="btn btn-primary">Post my update</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default DailyUpdateForm;

