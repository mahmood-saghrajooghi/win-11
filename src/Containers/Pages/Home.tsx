import { Chart } from "chart.js";
import React from "react";
import { Bar, Doughnut } from 'react-chartjs-2';
import { FaSortDown, FaSortUp } from "react-icons/fa";
import Card, { CardHeader, CARD_COLORS } from '../../Components/Cards/Card';
import Grid from "../../Components/Grid/Grid";
import { CustomTable } from "../../Components/Table/RawTableParts";
import { ACTIVE_USERS_DATA, BAR_CHART_OPTIONS, DONOUGHT_DATA, DONOUGHT_OPTIONS, PAGE_VIEWS_DATA } from "../../store/constants/homeCharts";

const Home: React.FC = () => {
	Chart.register({
		id: "home-donought",
		beforeDraw: function (chart: any) {
			if (chart.canvas.id === "home-donought") {
				var width = chart.width,
					height = chart.height,
					ctx = chart.ctx;
				ctx.restore();
				ctx.fillStyle = "#5e6366";
				ctx.font = "600 32px QuickSand";
				ctx.textBaseline = "middle";
				var text = "1,080",
					textX = Math.round((width - ctx.measureText(text).width) / 2),
					textY = height / 2 - 5;
				ctx.fillText(text, textX, textY);
				ctx.restore();
				ctx.fillStyle = "#92979a";
				ctx.font = "600 " + 15 + "px QuickSand";
				var text2 = "total score";
				textX = Math.round((width - ctx.measureText(text2).width) / 2);
				textY = textY + 25;
				ctx.fillText(text2, textX, textY);
				ctx.save();
			}
		}
	} as any);
	const donoughtData = DONOUGHT_DATA;
	const data2 = ACTIVE_USERS_DATA;
	const data = PAGE_VIEWS_DATA;

	return (
		<>
			<Grid className="home-grid" >
				<Card calssName="daily-visits-card">
					<CardHeader>
						<h5 style={{ marginBottom: ".25rem" }}>Daily Visits</h5>
						<h3>
							123
							<small
								className="text-success"
								style={{ marginLeft: ".5rem" }}
							>
								+3,74%
							</small>
						</h3>
					</CardHeader>
					<Bar
						type="bar"
						height={60}
						data={data}
						options={BAR_CHART_OPTIONS}
						style={{ marginTop: "1rem" }}
					/>
				</Card>
				<Card calssName="page-views-card">
					<CardHeader>
						<h5 style={{ marginBottom: ".25rem" }}>Pageviews</h5>
						<h3>
							2,9 %
							<small
								className={CARD_COLORS.DANGER}
								style={{ marginLeft: ".2rem" }}>
								-5,74%
							</small>
						</h3>
					</CardHeader>
					<Bar
						type="bar"
						height={80}
						data={data2}
						options={BAR_CHART_OPTIONS}
						style={{ marginTop: "1rem" }}
					/>
				</Card>
				<Card calssName="time-on-site-card">
					<CardHeader>
						<h5 className="mt-1">Time on site</h5>
						<h3>
							2:49
							<small
								className={CARD_COLORS.DANGER}
								style={{ marginLeft: ".2rem" }} >
								-3,74%
							</small>
						</h3>
					</CardHeader>
					<Bar
						type="bar"
						height={80}
						data={data2}
						options={BAR_CHART_OPTIONS}
						style={{ marginTop: "1rem" }}
					/>
				</Card>
				<Card
					calssName="keyword-card"
				>
					<CardHeader>
						<h4>Keyword rankings</h4>
						<h6 style={{ marginTop: '.5rem' }}>Based on out imagination</h6>
						<Doughnut
							id="home-donought"
							type="donought"
							data={donoughtData}
							options={DONOUGHT_OPTIONS}
							style={{
								margin: "2rem",
							}}
						/>
						<CustomTable className={{ wrapper: "color-default table-transparent table-small" }}>
							<thead>
								<th>source</th>
								<th>value</th>
							</thead>
							<tbody>
								<tr>
									<td>
										<span className="dot" style={{ background: "var(--grey80)" }}></span>
										Eeasy-to-Pump Keywords
									</td>
									<td>
										536
									</td>
								</tr>
								<tr>
									<td>
										<span className="dot" style={{ background: "var(--blue70)" }}></span>
										Keyword Gaps
									</td>
									<td>
										328
									</td>
								</tr>
								<tr>
									<td>
										<span className="dot" style={{ background: "var(--red60)" }}></span>
										Keyword Bridges
									</td>
									<td>
										187
									</td>
								</tr>
								<tr>
									<td>
										<span className="dot" style={{ background: "var(--green60)" }}></span>
										Satisfaction Opportunities
									</td>
									<td>
										91
									</td>
								</tr>
								<tr>
									<td>
										<span className="dot" style={{ background: "var(--orange50)" }}></span>
										Buyer Keywords
									</td>
									<td>
										84
									</td>
								</tr>
							</tbody>
						</CustomTable>
					</CardHeader>
				</Card>
				<Card calssName="similar-sites-card">
					<CardHeader>
						<h4>Similar sites</h4>
						<h6 className="mt-1">Shown by audience overlap</h6>
						<CustomTable className={{ wrapper: "color-default table-transparent table-small mt-4" }}>
							<thead>
								<tr>
									<th>Website</th>
									<th className="text-right">
										Score
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>google.com</td>
									<td className="text-right">53.6</td>
								</tr>
							</tbody>
						</CustomTable>
					</CardHeader>
				</Card>
				<Card calssName="trend-card">
					<CardHeader>
						<h4>Trend</h4>
						<CustomTable className={{ wrapper: "color-default table-transparent table-small" }}>
							<thead>
								<tr>
									<th>Website</th>
									<th className="text-right">
										Score
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>google.com</td>
									<td className="text-right">53.6</td>
								</tr>
							</tbody>
						</CustomTable>
					</CardHeader>
				</Card>
				<Card calssName="top-sellers-card" >
					<CardHeader>
						<h4>Top Selleres</h4>
						<CustomTable className={{ wrapper: "color-default table-transparent table-small" }}>
							<thead>
								<tr>
									<th>Title</th>
									<th className="text-right">
										Total. $
									</th>
									<th className="text-right">
										Share. %
									</th>
									<th className="text-right">
										Popularity
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Dwarves and Your Kid (Original)</td>
									<td className="text-right">2738</td>
									<td className="text-right text-success">60%<FaSortUp style={{ marginBottom: "-4px", marginLeft: "3px" }} /></td>
									<td className="text-right text-danger">65.5%<FaSortDown style={{ marginRight: "0px", marginLeft: "3px" }} /></td>
								</tr>
								<tr>
									<td>Dwarves and Your Kid (PDF)</td>
									<td className="text-right">2738</td>
									<td className="text-right text-danger">40%<FaSortDown style={{ marginRight: "0px", marginLeft: "3px" }} /></td>
									<td className="text-right text-success">95.5%<FaSortUp style={{ marginBottom: "-4px", marginLeft: "3px" }} /></td>
								</tr>
							</tbody>
						</CustomTable>
					</CardHeader>
				</Card>
			</Grid>
		</>
	)
}

export default Home;