import React from "react";
import theme from "theme";
import { Theme, Link, Button, Input, Text, Box, Structure } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Button>
			Button
		</Button>
		<Input display="block" placeholder-color="LightGray" background="white" />
		<Text margin="0px 0px 0px 0px">
			Some text
		</Text>
		<Button onclick="console.log('test')">
			Butto
		</Button>
		<Box min-width="100px" min-height="100px" />
		<Structure cells-number-group="12" cells-number-total="12">
			<Override
				slot="Content"
				grid-template-columns="repeat(4, [col] 3fr)"
				md-grid-template-columns="repeat(2, [col] 6fr)"
				sm-grid-template-columns="12fr"
				grid-template-rows="repeat(6, [row] 2fr)"
				md-grid-template-rows="repeat(12, [row] 1fr)"
				sm-grid-template-rows="12fr"
			>
				<Override
					slot="Cell 0"
					grid-column="col 1 / span 1"
					sm-grid-column="auto"
					grid-row="row 1 / span 3"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 1"
					grid-column="col 2 / span 1"
					sm-grid-column="auto"
					grid-row="row 1 / span 2"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 2"
					grid-column="col 3 / span 1"
					md-grid-column="col 1 / span 1"
					sm-grid-column="auto"
					grid-row="row 1 / span 3"
					md-grid-row="row 7 / span 3"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 3"
					grid-column="col 4 / span 1"
					md-grid-column="col 2/ span 1"
					sm-grid-column="auto"
					grid-row="row 1 / span 2"
					md-grid-row="row 7 / span 2"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 4"
					grid-column="col 1 / span 1"
					sm-grid-column="auto"
					grid-row="row 4 / span 1"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 5"
					grid-column="col 2 / span 1"
					sm-grid-column="auto"
					grid-row="row 3 / span 3"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 6"
					grid-column="col 3 / span 1"
					md-grid-column="col 1 / span 1"
					sm-grid-column="auto"
					grid-row="row 4 / span 1"
					md-grid-row="row 10 / span 1"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 7"
					grid-column="col 4 / span 1"
					md-grid-column="col 2 / span 1"
					sm-grid-column="auto"
					grid-row="row 3 / span 3"
					md-grid-row="row 9 / span 3"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 8"
					grid-column="col 1 / span 1"
					sm-grid-column="auto"
					grid-row="row 5 / span 2"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 9"
					grid-column="col 2 / span 1"
					sm-grid-column="auto"
					grid-row="row 6 / span 1"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 10"
					grid-column="col 3 / span 1"
					md-grid-column="col 1 / span 1"
					sm-grid-column="auto"
					grid-row="row 5 / span 2"
					md-grid-row="row 11 / span 2"
					sm-grid-row="auto"
				/>
				<Override
					slot="Cell 11"
					grid-column="col 4 / span 1"
					md-grid-column="col 2 / span 1"
					sm-grid-column="auto"
					grid-row="row 6 / span 1"
					md-grid-row="row 12 / span 1"
					sm-grid-row="auto"
				/>
				<Override slot="cell-0">
					<Button>
						Button
					</Button>
				</Override>
				<Override slot="cell-1">
					<Link href="#" color="#000000">
						Some text
					</Link>
				</Override>
				<Override slot="cell-6">
					<Text margin="0px 0px 0px 0px">
						Some text
					</Text>
				</Override>
				<Override slot="cell-3">
					<Input display="block" placeholder-color="LightGray" background="white" />
				</Override>
				<Override slot="Cell 3rd" lg-display="flex" lg-justify-content="center" lg-align-items="center" />
				<Override slot="Cell 0th" lg-align-items="center" lg-display="flex" lg-justify-content="center" />
				{"        "}{"        "}{"        "}{"        "}{"        "}{"        "}{"        "}{"        "}{"        "}{"        "}{"        "}{"        "}{"    "}
			</Override>
		</Structure>
		<Components.Test />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"65ef09758e2e8e0021797ebb"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});