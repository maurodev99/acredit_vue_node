<template>
	<v-container>
		<!-- Start header -->
		<v-row>
			<v-col cols="12">
				<v-card class="mx-auto" tile outlined>
					<v-card-title>{{ $t('statistics.header.title') }}</v-card-title>
					<v-card-text>
						<v-row>
							<v-col cols="12" md="5">
								<div class="text-center flex-grow-1">
									<p>{{ $t('statistics.header.income') }}</p>
									<h3>32 800 Kr</h3>
								</div>
							</v-col>
							<v-col cols="12" md="1">
								<v-spacer />
								<v-divider vertical></v-divider>
							</v-col>

							<v-col cols="12" md="6">
								<div class="text-center flex-grow-1">
									<p>{{ $t('statistics.header.expenses') }}</p>
									<h3>-</h3>
								</div>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<!-- End header -->

		<!-- Start Incomes chart -->
		<v-row>
			<v-col cols="12">
				<v-card class="mx-auto" tile outlined>
					<v-card-title>
						<h4>{{ $t('statistics.header.title') }}</h4>
						<v-spacer />
						<div class="mx-2">
							<v-list-item-avatar tile class="ma-0" size="10" color="blue"></v-list-item-avatar>
							<small>{{ $t('statistics.income') }}</small>
						</div>
					</v-card-title>

					<v-card-text>
						<Chart />
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<!-- End Incomes chart -->

		<!-- Start Top 5 charts -->
		<v-row>
			<v-col md="6" :key="index" v-for="(chart, index) in charts">
				<v-card v-if="chart.chartData">
					<v-card-title class="justify-space-between d-flex">
						<h4>{{ chart.title.text }}</h4>
						<v-spacer />
						<small>
							<nuxt-link :to="chart.title.url">{{ chart.title.urlText }}</nuxt-link>
						</small>
					</v-card-title>
					<v-card-text>
						<v-row>
							<v-col cols="12">
								<PieChart
									:chartColors="chart.chartColors"
									:chartData="chart.chartData"
									:labels="chart.chartLabel"
								/>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>

				<v-sheet v-else color="grey lighten-4" class="px-3 pt-3 pb-3">
					<v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
				</v-sheet>
			</v-col>
		</v-row>
		<!-- End Top 5 charts -->

		<!-- Strat invoices statistics -->
		<v-row>
			<v-col cols="12" md="6" :key="index" v-for="(card, index) in cards">
				<v-card>
					<v-card-title class="d-block text-center">
						<h4>{{ card.title.text }}</h4>
						<p>{{ card.title.money }} Kr</p>
					</v-card-title>

					<v-card-text>
						<div :key="index" v-for="(info, index) in card.infos" class="pa-1">
							<div class="my-1 d-flex">
								<span>{{ info.label }}</span>
								<v-spacer />
								<span>{{ info.money }} Kr</span>
							</div>
							<v-divider />
						</div>
					</v-card-text>

					<v-card-actions>
						<v-btn color="success" :to="card.actions.btn.url">{{ card.actions.btn.text }}</v-btn>
						<v-spacer />
						<nuxt-link :to="card.actions.text.url">{{card.actions.text.text}}</nuxt-link>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<!-- End invoices statistics -->

		<!-- Start fiscal year -->
		<v-row>
			<v-col cols="12">
				<v-card class="pa-5 d-flex align-center justify-space-between">
					<p>{{ $t('statistics.bottomCards.yearProfit') }}</p>
					<p class="green--text">0,00 Kr</p>
				</v-card>
			</v-col>

			<v-col cols="12" md="6">
				<v-card>
					<v-card-title class="pa-5 d-flex align-center justify-space-between">
						<p>
							<v-icon>mdi mdi-bank</v-icon>
							{{ $t('statistics.bottomCards.balance') }}
						</p>
						<p class="green--text">31 564.00 Kr</p>
					</v-card-title>

					<v-divider />

					<v-card-text>
						<div class="py-2 d-flex align-center justify-space-between">
							<p>Someone</p>
							<p class="green--text">31 564.00 Kr</p>
						</div>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" md="6">
				<v-card>
					<v-card-title class="pa-5 d-flex align-center justify-space-between">
						<p>
							<v-icon>mdi mdi-currency-usd</v-icon>
							{{ $t('statistics.bottomCards.texas') }}
						</p>
						<p class="red--text">0,00 Kr</p>
					</v-card-title>

					<v-divider />

					<v-card-text>
						<div class="d-flex py-2 align-center justify-space-between">
							<p>{{ $t('statistics.bottomCards.profit') }}</p>
							<p class="green--text">0.00 Kr</p>
						</div>
						<div class="d-flex py-2 align-center justify-space-between">
							<p>{{ $t('statistics.bottomCards.textable') }}</p>
							<p class="green--text">0.00 Kr</p>
						</div>
						<div class="d-flex py-2 align-center justify-space-between">
							<p>{{ $t('statistics.bottomCards.localTax') }}</p>
							<p class="red--text">21.4 %</p>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
		<!-- End fiscal year -->
	</v-container>
</template>

<script>
import Chart from "@/components/charts/RandomChart.vue";
import PieChart from "@/components/charts/PieChart.vue";

export default {
	middleware: "auth",
	layout: "admin",

	components: {
		Chart,
		PieChart
	},
	data() {
		return {
			radios: "customers",
			customerChartDate: null,
			customerChartLables: null,
			ItemChartData: null,
			ItemChartLabels: null,

			cards: [],
			charts: [
				{
					title: this.$t("statistics.total5.items.title"),
					chartColors: ["#2d2d3b", "#ffccc7", "#b66d60", "#ecb278", "#983e3e "],
					chartData: null,
					chartLabel: null
				},
				{
					title: this.$t("statistics.total5.customers.title"),
					chartColors: ["#2d2d3b", "#ffccc7", "#b66d60", "#ecb278", "#983e3e "],
					chartData: null,
					chartLabel: null
				}
			]
		};
	},
	async mounted() {
		var t0 = performance.now();

		const promises = [
			this.$axios.$get("/customers"),
			this.$axios.$get("/invoices"),
			this.$axios.$get("/articlepatterns")
		];
		await Promise.all(promises).then(async res => {
			let customers = res[0],
				invoices = res[1],
				articlePatterns = res[2],
				invoicesCustomers = [],
				allArticles = [],
				summation = 0,
				Overdue = 0,
				to_7 = 0,
				to_14 = 0,
				to_21 = 0,
				plus21 = 0;

			for (let i = 0; i < invoices.length; i++) {
				const invoice = invoices[i];

				/** extrach name in another array */
				if (invoice.customername !== "undefined")
					invoicesCustomers.push(invoice.customername);
				summation += invoice.total;
				let days = Math.round(
					(new Date(invoice.duedate) - new Date(invoice.createdate)) / 86400000
				);

				if (days < 0) Overdue += invoice.total;
				else if (days > 0 && days <= 7) to_7 += invoice.total;
				else if (days > 7 && days <= 14) to_14 += invoice.total;
				else if (days > 14 && days <= 21) to_21 += invoice.total;
				else if (days > 21) plus21 += invoice.total;

				/** Get articles for each invoice */
				await this.$axios
					.$get(`articles/invoice/${invoice.ocrid}`)
					.then(res => allArticles.push(...res));
			}

			this.cards.unshift({
				title: { text: this.$t("statistics.card.title"), money: Math.round((summation + Number.EPSILON) * 100) / 100

 },
				infos: [
					{ label: this.$t("statistics.card.infos.overdue"), money: Overdue },
					{ label: this.$t("statistics.card.infos.due"), money: "0" },
					{ label: this.$t("statistics.card.infos.to_7"), money: to_7 },
					{ label: this.$t("statistics.card.infos.to_14"), money: to_14 },
					{ label: this.$t("statistics.card.infos.to_21"), money: to_21 },
					{ label: this.$t("statistics.card.infos.plus21"), money: plus21 }
				],
				actions: this.$t("statistics.card.actions")
			});

			// this.invoicesCalculations(invoices);
			this.getMostRepeatedValue(invoicesCustomers);
			this.getMostRepeatedItem(articlePatterns, allArticles);

			var t1 = performance.now();
			console.log("Mount takes: " + (t1 - t0) + " milliseconds.");
		});
	},
	methods: {
		getMostRepeatedValue(arr) {
			let array = arr.sort(),
				item = null,
				times = 0,
				finalArr = [],
				names = [],
				frequanty = [];

			array.forEach(e => {
				if (finalArr.length == 0) {
					finalArr.push({ name: e, times: times });
					names.push(e);
					frequanty.push(times);
					item = e;
				} else if (item == e) {
					frequanty[frequanty.length - 1]++; /** increase the  */
				} else if (finalArr.length < 5 && item !== e) {
					times = 1;
					item = e;
					finalArr.push({ name: e, times: times });
					names.push(e);
					frequanty.push(times);
				}
			});

			if (names.length == 0) {
				this.charts[1].chartData = [1];
				this.charts[1].chartLabel = ["No Customers"];
			} else {
				this.charts[1].chartData = frequanty;
				this.charts[1].chartLabel = names;
			}
		},
		invoicesCalculations(arr) {
			let summation = 0,
				Overdue = 0,
				to_7 = 0,
				to_14 = 0,
				to_21 = 0,
				plus21 = 0;

			arr.forEach(invoice => {
				summation += invoice.total;
				let days = Math.round(
					(new Date(invoice.duedate) - new Date(invoice.createdate)) / 86400000
				);

				if (days < 0) {
					Overdue += invoice.total;
				} else if (days > 0 && days <= 7) {
					to_7 += invoice.total;
				} else if (days > 7 && days <= 14) {
					to_14 += invoice.total;
				} else if (days > 14 && days <= 21) {
					to_21 += invoice.total;
				} else if (days > 21) {
					plus21 += invoice.total;
				}
			});

			this.cards.unshift({
				title: { text: this.$t("statistics.card.title"), money: summation },
				infos: [
					{ label: this.$t("statistics.card.infos.overdue"), money: Overdue },
					{ label: this.$t("statistics.card.infos.due"), money: "0" },
					{ label: this.$t("statistics.card.infos.to_7"), money: to_7 },
					{ label: this.$t("statistics.card.infos.to_14"), money: to_14 },
					{ label: this.$t("statistics.card.infos.to_21"), money: to_21 },
					{ label: this.$t("statistics.card.infos.plus21"), money: plus21 }
				],
				actions: this.$t("statistics.card.actions")
			});
		},

		getMostRepeatedItem(patterns, allItems) {
			let data = [],
				labels = [];

			patterns.forEach(pattern => {
				/** Check if we have already 5 items */
				allItems.forEach(article => {
					if (pattern.artikelnamn == article.artikelnamn) {
						if (data.length == 0) {
							/** If this is the first element */
							data.push(1);
							labels.push(pattern.artikelnamn);
						} else {
							/** check if we already have it */
							let i = labels.indexOf(pattern.artikelnamn);
							if (i != -1) {
								/** If existed increase its number*/
								data[i]++;
							} else {
								if (data.length < 5) {
									/** If not existed */
									labels.push(pattern.artikelnamn);
									data.push(1);
								}
							}
						}
					}
				});
			});

			if (labels.length == 0) {
				this.charts[0].chartData = [1];
				this.charts[0].chartLabel = ["no items"];
			} else {
				this.charts[0].chartData = data;
				this.charts[0].chartLabel = labels;
			}
		}
	}
};
</script>

<style>
p {
	margin: 0 !important;
	padding: 0 !important;
}
</style>
