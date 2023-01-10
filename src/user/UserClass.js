import React from 'react';

export default class UserClass extends React.Component {
    render() {
        const { name, handleInput } = this.props;
        return (
            <div>
                <form>
                    <label>
                        Promjeni ime: &nbsp;
                        <input
                            type='text'
                            name='name'
                            placeholder={name}
                            onChange={handleInput}
                        />
                    </label>
                </form>
            </div>
        );
    }
}
