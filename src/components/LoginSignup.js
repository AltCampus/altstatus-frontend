import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
			<div class="form-container col-md-6 col-md-offset-3">
				<form class="form-group">
					<div class="">
						<input type="text" class="form-control" id="" placeholder="Your Name"/>
						<input type="email" class="form-control" id="" placeholder="Your Email"/>
						<input type="password" class="form-control" id="" placeholder="Password"/>
						<input type="password" class="form-control" id="" placeholder="Confirm Password"/>
						<select class="form-control select">
							<option value="Batch">Batch</option>
							<option value="Batch1">Batch1</option>
							<option value="Batch2">Batch2</option>
						</select>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
    );
  }
}

export default App;