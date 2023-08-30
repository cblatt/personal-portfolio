import React from "react";

const CamBot: React.FC = () => {
    return (
			<div>
				<div
					dangerouslySetInnerHTML={{
						__html: `
    					  <df-messenger
    					    intent="WELCOME"
    					    chat-title="🤖 CamBot"
							chat-icon="https://i.imgur.com/J1X8f72.png"
    					    agent-id="e654309e-9d4b-4379-877c-3e12df965bcf"
    					    language-code="en"
    					  ></df-messenger>
    					`,
					}}
				/>
			</div>
		);
};

export default CamBot
