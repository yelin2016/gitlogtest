<a name="2.0.0"></a>
# [2.0.0](https://github.com/wangy1931/cloudwiz-web/compare/v1.0.0-cloudwiz-rpm-centos-install...v2.0.0) (2018-07-24)


### Bug Fixes

* add dashboard ([7ff8352](https://github.com/wangy1931/cloudwiz-web/commit/7ff8352))
* anomaly time picker ([e9393e8](https://github.com/wangy1931/cloudwiz-web/commit/e9393e8))
* cmdb delete scan & host import ([9beb253](https://github.com/wangy1931/cloudwiz-web/commit/9beb253))
* code style ([767b6d9](https://github.com/wangy1931/cloudwiz-web/commit/767b6d9))
* code style ([83aa4b1](https://github.com/wangy1931/cloudwiz-web/commit/83aa4b1))
* CSV translate ([bc1b6f2](https://github.com/wangy1931/cloudwiz-web/commit/bc1b6f2))
* host_agent systemId ([f207ae5](https://github.com/wangy1931/cloudwiz-web/commit/f207ae5))
* import alert style ([a304c1a](https://github.com/wangy1931/cloudwiz-web/commit/a304c1a))
* init dashboard ([ccf0fbe](https://github.com/wangy1931/cloudwiz-web/commit/ccf0fbe))
* jsplumb exclude ([898034c](https://github.com/wangy1931/cloudwiz-web/commit/898034c))
* just one pattern ([f1dbe3c](https://github.com/wangy1931/cloudwiz-web/commit/f1dbe3c))
* metric name is too long in /anomaly to display health value correctly ([6ac1698](https://github.com/wangy1931/cloudwiz-web/commit/6ac1698))
* newcomer ([c68a05e](https://github.com/wangy1931/cloudwiz-web/commit/c68a05e))
* open cmdb ([5b54db7](https://github.com/wangy1931/cloudwiz-web/commit/5b54db7))
* panel 头部menu替换为右上角menu ([012c2d6](https://github.com/wangy1931/cloudwiz-web/commit/012c2d6))
* profile ([d87f030](https://github.com/wangy1931/cloudwiz-web/commit/d87f030))
* profile 选择用户 ([d0d133e](https://github.com/wangy1931/cloudwiz-web/commit/d0d133e))
* rca topology & ui bugs ([614c8a1](https://github.com/wangy1931/cloudwiz-web/commit/614c8a1))
* search newdashboard ([e93dcc9](https://github.com/wangy1931/cloudwiz-web/commit/e93dcc9))
* sql 中解析";"问题 ([78b0086](https://github.com/wangy1931/cloudwiz-web/commit/78b0086))
* suggestTagKeys filter by metric ([66d6db8](https://github.com/wangy1931/cloudwiz-web/commit/66d6db8))
* summary panel type to table ([f6a3e16](https://github.com/wangy1931/cloudwiz-web/commit/f6a3e16))
* trustAsHtml ([f304a6c](https://github.com/wangy1931/cloudwiz-web/commit/f304a6c))
* update api.go ([c6d7793](https://github.com/wangy1931/cloudwiz-web/commit/c6d7793))
* when oncaller nobody ([80d407f](https://github.com/wangy1931/cloudwiz-web/commit/80d407f))
* 下载路径 ([e585f4f](https://github.com/wangy1931/cloudwiz-web/commit/e585f4f))
* 报警规则添加机器时对";"进行容错 ([e2e02f8](https://github.com/wangy1931/cloudwiz-web/commit/e2e02f8))
* 无法比较两个dashboard 是否是同一个 system 下 ([bbf39f8](https://github.com/wangy1931/cloudwiz-web/commit/bbf39f8))
* 日志路径正则表达式更新 ([914d75e](https://github.com/wangy1931/cloudwiz-web/commit/914d75e))
* 服务总览kpi不正常说明 ([8e6d142](https://github.com/wangy1931/cloudwiz-web/commit/8e6d142))
* 统一navbar ([a2970b0](https://github.com/wangy1931/cloudwiz-web/commit/a2970b0))



<a name="3.0.0-beta7"></a>
# [3.0.0-beta7](https://github.com/wangy1931/cloudwiz-web/compare/v3.0.0-beta6...v3.0.0-beta7) (2016-05-02)


### Bug Fixes

* **annotations:** Fixed issue with entering annotation edit view, fixes [#4857](https://github.com/wangy1931/cloudwiz-web/issues/4857) ([0d85254](https://github.com/wangy1931/cloudwiz-web/commit/0d85254))
* **css:** Fixed max dashboard title width (media query) for large screens,  fixes [#4859](https://github.com/wangy1931/cloudwiz-web/issues/4859) ([e337613](https://github.com/wangy1931/cloudwiz-web/commit/e337613))
* **graphite:** Fixed issue graphite png rendering option, fixes [#4864](https://github.com/wangy1931/cloudwiz-web/issues/4864) ([36c583d](https://github.com/wangy1931/cloudwiz-web/commit/36c583d))
* **influxdb:** Fixed issue with missing plus group by icon, fixes [#4862](https://github.com/wangy1931/cloudwiz-web/issues/4862) ([736ee3f](https://github.com/wangy1931/cloudwiz-web/commit/736ee3f))
* **query editor:** Fixed issue with removing query for data sources without collapsable query editors, fixes [#4856](https://github.com/wangy1931/cloudwiz-web/issues/4856) ([70d03b7](https://github.com/wangy1931/cloudwiz-web/commit/70d03b7))


### Features

* **influxdb:** Added new functions moving_average and difference to query editor, closes [#4698](https://github.com/wangy1931/cloudwiz-web/issues/4698) ([e6bccc5](https://github.com/wangy1931/cloudwiz-web/commit/e6bccc5))



<a name="3.0.0-beta6"></a>
# [3.0.0-beta6](https://github.com/wangy1931/cloudwiz-web/compare/v2.6.0...v3.0.0-beta6) (2016-04-29)


### Bug Fixes

* **annotations:** make sure a data source that supports annotations is used in annotation editor when creating new ([905d314](https://github.com/wangy1931/cloudwiz-web/commit/905d314))
* **annotations:** rearrange missplaced save button ([6c617ba](https://github.com/wangy1931/cloudwiz-web/commit/6c617ba))
* **annotations:** updated annotations query editor ([3f05b4b](https://github.com/wangy1931/cloudwiz-web/commit/3f05b4b))
* **annotations editor:** fixed lagging annotations editor view ([55d4392](https://github.com/wangy1931/cloudwiz-web/commit/55d4392))
* **api:** do not include null jsonData field in /api/datasources resource, closes [#3755](https://github.com/wangy1931/cloudwiz-web/issues/3755) ([38ddc88](https://github.com/wangy1931/cloudwiz-web/commit/38ddc88))
* **api:** org name taken error now returns HTTP status code 409, closes ([53f5cb6](https://github.com/wangy1931/cloudwiz-web/commit/53f5cb6))
* **app config:** fixed issue with app config tab, fixes [#4575](https://github.com/wangy1931/cloudwiz-web/issues/4575) ([dc7f801](https://github.com/wangy1931/cloudwiz-web/commit/dc7f801))
* **apps:** app dashboards can now be updated, fixes [#4817](https://github.com/wangy1931/cloudwiz-web/issues/4817) ([bce5c44](https://github.com/wangy1931/cloudwiz-web/commit/bce5c44))
* **backendsrv:** remove invalid check ([90c6b04](https://github.com/wangy1931/cloudwiz-web/commit/90c6b04))
* **bra:** fix bra runner ([fe4cdc5](https://github.com/wangy1931/cloudwiz-web/commit/fe4cdc5))
* **build:** changed from postinstall script to regular grunt task for the copying of npm dependencies into public dir, fixes [#4003](https://github.com/wangy1931/cloudwiz-web/issues/4003) ([f797b19](https://github.com/wangy1931/cloudwiz-web/commit/f797b19))
* **build:** fixed build script issue ([573457c](https://github.com/wangy1931/cloudwiz-web/commit/573457c))
* **build:** fixed dependency and build issue ([bdb67d4](https://github.com/wangy1931/cloudwiz-web/commit/bdb67d4))
* **build:** fixed issue after merge ([44f0242](https://github.com/wangy1931/cloudwiz-web/commit/44f0242))
* **build:** fixed js issue with optimized build ([f0ae6a0](https://github.com/wangy1931/cloudwiz-web/commit/f0ae6a0))
* **build:** fixed minor issue in systemjs builder, and added SystemJs cache buster ([dad3945](https://github.com/wangy1931/cloudwiz-web/commit/dad3945))
* **build:** minor build script fix, fixes [#3756](https://github.com/wangy1931/cloudwiz-web/issues/3756) ([0a58404](https://github.com/wangy1931/cloudwiz-web/commit/0a58404))
* **build:** minor fix ([316e1aa](https://github.com/wangy1931/cloudwiz-web/commit/316e1aa))
* **build:** trying to fix build ([f3fe1a5](https://github.com/wangy1931/cloudwiz-web/commit/f3fe1a5))
* **build:** updated moment.js to fix systemjs build issue, fixes [#4306](https://github.com/wangy1931/cloudwiz-web/issues/4306) ([bb1e7f6](https://github.com/wangy1931/cloudwiz-web/commit/bb1e7f6))
* **circleci:** deletes node_modules before npm install ([979807f](https://github.com/wangy1931/cloudwiz-web/commit/979807f))
* **circleci:** updates npm before npm install ([ab4d020](https://github.com/wangy1931/cloudwiz-web/commit/ab4d020))
* **cleanup:** removed unused js file ([cbb5811](https://github.com/wangy1931/cloudwiz-web/commit/cbb5811))
* **cli:** add latest version to list-remote command ([77f9388](https://github.com/wangy1931/cloudwiz-web/commit/77f9388)), closes [#4205](https://github.com/wangy1931/cloudwiz-web/issues/4205)
* **cli:** add new executables to gitignore ([36f4f1d](https://github.com/wangy1931/cloudwiz-web/commit/36f4f1d))
* **cli:** adds better help text. ([70acfb2](https://github.com/wangy1931/cloudwiz-web/commit/70acfb2)), closes [#4651](https://github.com/wangy1931/cloudwiz-web/issues/4651)
* **cli:** adds support for local plugin folder ([485a377](https://github.com/wangy1931/cloudwiz-web/commit/485a377)), closes [#4572](https://github.com/wangy1931/cloudwiz-web/issues/4572)
* **cli:** align code with core grafana ([7462577](https://github.com/wangy1931/cloudwiz-web/commit/7462577))
* **cli:** fixes missplaced % ([ff22f43](https://github.com/wangy1931/cloudwiz-web/commit/ff22f43))
* **cli:** improve error message for not using sudo ([676e950](https://github.com/wangy1931/cloudwiz-web/commit/676e950)), closes [#4562](https://github.com/wangy1931/cloudwiz-web/issues/4562)
* **cli:** improve logging when folders does not exists ([1a6af06](https://github.com/wangy1931/cloudwiz-web/commit/1a6af06))
* **cli:** remove dev text values ([5adac86](https://github.com/wangy1931/cloudwiz-web/commit/5adac86))
* **cli:** retry download when panicing ([f397d0d](https://github.com/wangy1931/cloudwiz-web/commit/f397d0d)), closes [#4068](https://github.com/wangy1931/cloudwiz-web/issues/4068)
* **css:** fixed issues introduced in recent sidemenu enhancements, fixes [#3893](https://github.com/wangy1931/cloudwiz-web/issues/3893), fixes [#3894](https://github.com/wangy1931/cloudwiz-web/issues/3894) ([d617d02](https://github.com/wangy1931/cloudwiz-web/commit/d617d02))
* **dashboard:** fixed dashboard layout for mobile devices, fixes [#4529](https://github.com/wangy1931/cloudwiz-web/issues/4529) ([2f2029a](https://github.com/wangy1931/cloudwiz-web/commit/2f2029a))
* **dashboard:** fixed issue with render event after resize ([c4440ea](https://github.com/wangy1931/cloudwiz-web/commit/c4440ea))
* **dashboard:** fixes when panel repeat with templating removed ([72415be](https://github.com/wangy1931/cloudwiz-web/commit/72415be)), closes [#3831](https://github.com/wangy1931/cloudwiz-web/issues/3831)
* **dashboard list:** fixed minor issue with dashboard list panel, fixes [#4768](https://github.com/wangy1931/cloudwiz-web/issues/4768) ([7079b5d](https://github.com/wangy1931/cloudwiz-web/commit/7079b5d))
* **dashboard_settings:** update css for last row ([1b341f8](https://github.com/wangy1931/cloudwiz-web/commit/1b341f8))
* **dashlink:** improve variable naming ([0f546a4](https://github.com/wangy1931/cloudwiz-web/commit/0f546a4))
* **dashlist:** avoid null ref errors ([c6768a9](https://github.com/wangy1931/cloudwiz-web/commit/c6768a9))
* **dashlist:** better handling of invalid dashboard ids ([435d0f2](https://github.com/wangy1931/cloudwiz-web/commit/435d0f2))
* **dashlist:** fix for entering dashboard list edit mode ([501f21b](https://github.com/wangy1931/cloudwiz-web/commit/501f21b))
* **dashlist:** fixed dashlist bug ([49a1d44](https://github.com/wangy1931/cloudwiz-web/commit/49a1d44))
* **dashlist:** fixed issue with viewing last viewed dashboards, when you had more than dashboards in last viewed than panel limit they did not show up in list ([81c11eb](https://github.com/wangy1931/cloudwiz-web/commit/81c11eb))
* **dataproxy:** no trailing slash if proxypath is empty ([74decb4](https://github.com/wangy1931/cloudwiz-web/commit/74decb4)), closes [#3847](https://github.com/wangy1931/cloudwiz-web/issues/3847)
* **dataproxy:** remove partially used cache ([75454b0](https://github.com/wangy1931/cloudwiz-web/commit/75454b0)), closes [#4044](https://github.com/wangy1931/cloudwiz-web/issues/4044)
* **datasource:** filter out built in data sources from data source type dropdown ([ca5a34a](https://github.com/wangy1931/cloudwiz-web/commit/ca5a34a))
* **datasource:** fixes testdatasource bug ([f77bd59](https://github.com/wangy1931/cloudwiz-web/commit/f77bd59))
* **datasource:** when addding data source withCredentials did not get set, fixes [#4389](https://github.com/wangy1931/cloudwiz-web/issues/4389) ([fcaf2bf](https://github.com/wangy1931/cloudwiz-web/commit/fcaf2bf))
* **datasource edit:** Editing datasources broken earlier today, fixes [#4343](https://github.com/wangy1931/cloudwiz-web/issues/4343) ([28f4f3a](https://github.com/wangy1931/cloudwiz-web/commit/28f4f3a))
* **datasources:** fixes header condition ([4c7f638](https://github.com/wangy1931/cloudwiz-web/commit/4c7f638)), closes [#4402](https://github.com/wangy1931/cloudwiz-web/issues/4402)
* **datasources:** many datasources did not work in optimized build due to missing ngInject comment ([d4e1a71](https://github.com/wangy1931/cloudwiz-web/commit/d4e1a71))
* **datasources:** minor fix to data sources after apps branch merge ([a87b5f7](https://github.com/wangy1931/cloudwiz-web/commit/a87b5f7))
* **docker:** rename docker-compose build file ([8750ba9](https://github.com/wangy1931/cloudwiz-web/commit/8750ba9))
* **ds_edit:** dont show warning when data source does not support testing, fixes [#4811](https://github.com/wangy1931/cloudwiz-web/issues/4811) ([0762c38](https://github.com/wangy1931/cloudwiz-web/commit/0762c38))
* **elastic:** fixed typo ([e498503](https://github.com/wangy1931/cloudwiz-web/commit/e498503))
* **elasticsearch:** add a better default terms size limit of 10, fixes [#4013](https://github.com/wangy1931/cloudwiz-web/issues/4013) ([c764e7f](https://github.com/wangy1931/cloudwiz-web/commit/c764e7f))
* **elasticsearch:** fixes spelling of lucene, [#3519](https://github.com/wangy1931/cloudwiz-web/issues/3519) ([f163cef](https://github.com/wangy1931/cloudwiz-web/commit/f163cef))
* **examples:** ignore dist folder ([e3e0b72](https://github.com/wangy1931/cloudwiz-web/commit/e3e0b72))
* **examples:** update link in readme ([a16c799](https://github.com/wangy1931/cloudwiz-web/commit/a16c799))
* **export:** fix export dashboard to json, been broken in master for 2-3 weeks ([1979143](https://github.com/wangy1931/cloudwiz-web/commit/1979143))
* **export_csv:** rename export to csv label ([0cbb95e](https://github.com/wangy1931/cloudwiz-web/commit/0cbb95e))
* **fileexport:** tslint fix ([08f0239](https://github.com/wangy1931/cloudwiz-web/commit/08f0239))
* **firefox:** fixed js issue that made master build break in firefox ([f6a3b53](https://github.com/wangy1931/cloudwiz-web/commit/f6a3b53))
* **fonts:** move icon fonts back to main css ([aadc6e0](https://github.com/wangy1931/cloudwiz-web/commit/aadc6e0))
* **forms:** reverted back to old checkboxes as the new ones are broken and missing clear state, fixes [#4096](https://github.com/wangy1931/cloudwiz-web/issues/4096) ([1a41237](https://github.com/wangy1931/cloudwiz-web/commit/1a41237))
* **gauge:** validate min / max range, fixes [#4820](https://github.com/wangy1931/cloudwiz-web/issues/4820) ([8bb0712](https://github.com/wangy1931/cloudwiz-web/commit/8bb0712))
* **gofmt:** fixed non formated go file ([2cf0dc2](https://github.com/wangy1931/cloudwiz-web/commit/2cf0dc2))
* **google tag manager:** fixed link to google tag manager, fixes [#4005](https://github.com/wangy1931/cloudwiz-web/issues/4005) ([814ca99](https://github.com/wangy1931/cloudwiz-web/commit/814ca99))
* **graph:** add missing ctrl in variable ([edebdb1](https://github.com/wangy1931/cloudwiz-web/commit/edebdb1))
* **graph:** fixed color picker appearingunder pinned side nav, fixes [#4556](https://github.com/wangy1931/cloudwiz-web/issues/4556) ([29dff7b](https://github.com/wangy1931/cloudwiz-web/commit/29dff7b))
* **graph:** fixed for graph series color selector popover, broken in recent 3.0-pre1 build, fixes [#3774](https://github.com/wangy1931/cloudwiz-web/issues/3774) ([edcef7d](https://github.com/wangy1931/cloudwiz-web/commit/edcef7d))
* **graph:** fixed issue with graph and legend to the right in snapshots, closes [#4400](https://github.com/wangy1931/cloudwiz-web/issues/4400) ([f4feb38](https://github.com/wangy1931/cloudwiz-web/commit/f4feb38))
* **graph:** fixed issue with graph legend when in table mode and series on righ-y axis, also fixed so that you can see what series are on right-y axis when legend is in table mode, fixes [#4551](https://github.com/wangy1931/cloudwiz-web/issues/4551), fixes [#1145](https://github.com/wangy1931/cloudwiz-web/issues/1145) ([542e080](https://github.com/wangy1931/cloudwiz-web/commit/542e080))
* **graph:** Fixed issue with legend height in table mode with few series, affected iframe embedding as well, fixes [#4640](https://github.com/wangy1931/cloudwiz-web/issues/4640) ([a8f4b02](https://github.com/wangy1931/cloudwiz-web/commit/a8f4b02))
* **graph:** Fixed issue with light theme text color issue in tooltip, fixes [#4702](https://github.com/wangy1931/cloudwiz-web/issues/4702) ([9469b20](https://github.com/wangy1931/cloudwiz-web/commit/9469b20))
* **graph:** fixed issue with toggling series on and off would loose stacking, fixes [#4557](https://github.com/wangy1931/cloudwiz-web/issues/4557) ([ebb373e](https://github.com/wangy1931/cloudwiz-web/commit/ebb373e))
* **graph:** fixed issue with y-axis labels overlapping with the yaxis, fixes [#4626](https://github.com/wangy1931/cloudwiz-web/issues/4626) ([5d9c3d5](https://github.com/wangy1931/cloudwiz-web/commit/5d9c3d5))
* **graph:** legend height calculation now takes into account series hidden from legend, fixes [#4245](https://github.com/wangy1931/cloudwiz-web/issues/4245) ([4b08f39](https://github.com/wangy1931/cloudwiz-web/commit/4b08f39))
* **graph:** narrow panels shows right date format on x-axis ([f43e1ab](https://github.com/wangy1931/cloudwiz-web/commit/f43e1ab)), closes [#3852](https://github.com/wangy1931/cloudwiz-web/issues/3852)
* **graph:** removed angular copy that was no longer needed ([9917de0](https://github.com/wangy1931/cloudwiz-web/commit/9917de0))
* **graph:** sets legend table scroll to auto ([4e8396d](https://github.com/wangy1931/cloudwiz-web/commit/4e8396d)), closes [#4760](https://github.com/wangy1931/cloudwiz-web/issues/4760)
* **graph:** type in html ([252568c](https://github.com/wangy1931/cloudwiz-web/commit/252568c))
* **graph legend:** minor correction to last commit ([4377e95](https://github.com/wangy1931/cloudwiz-web/commit/4377e95))
* **graph panel:** fix for graph panel alignment when legend is in table mode, fixes [#4772](https://github.com/wangy1931/cloudwiz-web/issues/4772) ([45dd9c5](https://github.com/wangy1931/cloudwiz-web/commit/45dd9c5))
* **graph panel:** fixed bug in typeahead when adding series style override, fixes [#3554](https://github.com/wangy1931/cloudwiz-web/issues/3554) ([255901c](https://github.com/wangy1931/cloudwiz-web/commit/255901c))
* **graph panel:** fixed issue where newly added graph panels shared axes config binding, fixes [#4582](https://github.com/wangy1931/cloudwiz-web/issues/4582) ([c3d88aa](https://github.com/wangy1931/cloudwiz-web/commit/c3d88aa))
* **graph panel:** Fixed legend option max not updating, fixes [#4601](https://github.com/wangy1931/cloudwiz-web/issues/4601) ([a425ce0](https://github.com/wangy1931/cloudwiz-web/commit/a425ce0))
* **graphite:** minor fix to graphite query editor so it does not issue render requests for incomplete queries, fixes [#3510](https://github.com/wangy1931/cloudwiz-web/issues/3510) ([79d56f7](https://github.com/wangy1931/cloudwiz-web/commit/79d56f7))
* **graphite editor:** fixed moving functions right and left, broken recently, fixes [#3246](https://github.com/wangy1931/cloudwiz-web/issues/3246) ([31c317f](https://github.com/wangy1931/cloudwiz-web/commit/31c317f))
* **image rendering:** fixed issue with image rendering, fixes [#3804](https://github.com/wangy1931/cloudwiz-web/issues/3804) ([4a8f82c](https://github.com/wangy1931/cloudwiz-web/commit/4a8f82c))
* **img:** fixed img link on signup ([ac5f7ec](https://github.com/wangy1931/cloudwiz-web/commit/ac5f7ec))
* **img:** img link on login ([397e4e4](https://github.com/wangy1931/cloudwiz-web/commit/397e4e4))
* **impressionstorage:** remove console logging ([5d5f5cd](https://github.com/wangy1931/cloudwiz-web/commit/5d5f5cd))
* **impressionStorage:** use title instead of slut ([ad9b2ab](https://github.com/wangy1931/cloudwiz-web/commit/ad9b2ab)), closes [#4194](https://github.com/wangy1931/cloudwiz-web/issues/4194)
* **influxdb:** added regex start string char to templating suggestion, fixes [#4405](https://github.com/wangy1931/cloudwiz-web/issues/4405) ([d8499e6](https://github.com/wangy1931/cloudwiz-web/commit/d8499e6))
* **influxdb:** adds support for multi table values ([fde6eee](https://github.com/wangy1931/cloudwiz-web/commit/fde6eee)), closes [#4726](https://github.com/wangy1931/cloudwiz-web/issues/4726)
* **influxdb:** fix for influxdb when using format as table and having group by time, fixes [#2928](https://github.com/wangy1931/cloudwiz-web/issues/2928) ([37ff432](https://github.com/wangy1931/cloudwiz-web/commit/37ff432))
* **influxdb:** fixed annotation queries containting template variables, fixes [#4602](https://github.com/wangy1931/cloudwiz-web/issues/4602) ([262c341](https://github.com/wangy1931/cloudwiz-web/commit/262c341))
* **influxdb:** fixed annotations editor, broken recently in master due to plugin changes, fixes [#4023](https://github.com/wangy1931/cloudwiz-web/issues/4023) ([92f4442](https://github.com/wangy1931/cloudwiz-web/commit/92f4442))
* **influxdb:** fixed issue with using multi value template vars in influxdb measurement clause, fixes [#4797](https://github.com/wangy1931/cloudwiz-web/issues/4797) ([4d802df](https://github.com/wangy1931/cloudwiz-web/commit/4d802df))
* **influxdb:** fixed issue with using multi value template vars in influxdb measurement clause, fixes [#4797](https://github.com/wangy1931/cloudwiz-web/issues/4797) ([6bc898b](https://github.com/wangy1931/cloudwiz-web/commit/6bc898b))
* **influxdb:** minor fix for duplicated db param to proxied influxdb call, fixes [#4703](https://github.com/wangy1931/cloudwiz-web/issues/4703) ([711992c](https://github.com/wangy1931/cloudwiz-web/commit/711992c))
* **influxdb:** remove unused parameter ([5b75eea](https://github.com/wangy1931/cloudwiz-web/commit/5b75eea))
* **influxdb:** systemjs fix ([c19a2e5](https://github.com/wangy1931/cloudwiz-web/commit/c19a2e5))
* **inspector:** fixed broken panel error inspect ([33dc9fd](https://github.com/wangy1931/cloudwiz-web/commit/33dc9fd))
* **jshint:** fix jshint error ._. ([2f3587e](https://github.com/wangy1931/cloudwiz-web/commit/2f3587e))
* **jshint:** fixed jshint warning ([c0b92eb](https://github.com/wangy1931/cloudwiz-web/commit/c0b92eb))
* **jshint:** removed unused var ([4872f6d](https://github.com/wangy1931/cloudwiz-web/commit/4872f6d))
* **legend:** only add overflow scroll when needed ([63ca9f6](https://github.com/wangy1931/cloudwiz-web/commit/63ca9f6)), closes [#4049](https://github.com/wangy1931/cloudwiz-web/issues/4049)
* **less:** minor less fix ([10a764c](https://github.com/wangy1931/cloudwiz-web/commit/10a764c))
* **logging:** only log to xorm.log when in dev mode, fixes [#4182](https://github.com/wangy1931/cloudwiz-web/issues/4182) ([56c0804](https://github.com/wangy1931/cloudwiz-web/commit/56c0804))
* **login:** fix vulnerbility for timing attacks ([053868f](https://github.com/wangy1931/cloudwiz-web/commit/053868f)), closes [#3760](https://github.com/wangy1931/cloudwiz-web/issues/3760)
* **login:** hide divider if no oath ([b469904](https://github.com/wangy1931/cloudwiz-web/commit/b469904)), closes [#3980](https://github.com/wangy1931/cloudwiz-web/issues/3980)
* **merge:** minor merge fix ([8ff48c1](https://github.com/wangy1931/cloudwiz-web/commit/8ff48c1))
* **metrics tab:** Fix for missing datasource name in datasource selector, fixes [#4540](https://github.com/wangy1931/cloudwiz-web/issues/4540) ([f35eb0f](https://github.com/wangy1931/cloudwiz-web/commit/f35eb0f))
* **mixed data source:** fixed issue with mixed data sources in same graph, fixes [#4604](https://github.com/wangy1931/cloudwiz-web/issues/4604) ([781fed1](https://github.com/wangy1931/cloudwiz-web/commit/781fed1))
* **mixed datasource:** fixed issue with mixed data source in optimized build ([3d353c7](https://github.com/wangy1931/cloudwiz-web/commit/3d353c7))
* **npm:** updates phantomjs requirement ([bbc4c36](https://github.com/wangy1931/cloudwiz-web/commit/bbc4c36))
* **opentsdb:** fixed templating issue for OpenTSDB, fixes [#4312](https://github.com/wangy1931/cloudwiz-web/issues/4312), fixes [#4311](https://github.com/wangy1931/cloudwiz-web/issues/4311) ([4aba3bc](https://github.com/wangy1931/cloudwiz-web/commit/4aba3bc))
* **opentsdb:** fixed templating issue for single value variables, fixes [#4312](https://github.com/wangy1931/cloudwiz-web/issues/4312) ([d26d716](https://github.com/wangy1931/cloudwiz-web/commit/d26d716))
* **org switch:** fixed issue with switching orgs, fixes [#4614](https://github.com/wangy1931/cloudwiz-web/issues/4614) ([370589d](https://github.com/wangy1931/cloudwiz-web/commit/370589d))
* **panel:** fixed issues with png rendering, also fixed [#4260](https://github.com/wangy1931/cloudwiz-web/issues/4260) ([2c8e35a](https://github.com/wangy1931/cloudwiz-web/commit/2c8e35a))
* **panel:** fixed text panel issue due to recent style changes, fixes [#4095](https://github.com/wangy1931/cloudwiz-web/issues/4095) ([ac45ccb](https://github.com/wangy1931/cloudwiz-web/commit/ac45ccb))
* **panel:** fixed to panel height for text panel and unknown panel ([00c7030](https://github.com/wangy1931/cloudwiz-web/commit/00c7030))
* **panel:** fixes for panel height and alignment management and scrollable legends, closes [#4266](https://github.com/wangy1931/cloudwiz-web/issues/4266) ([260c731](https://github.com/wangy1931/cloudwiz-web/commit/260c731))
* **panel links:** changed icon back ([84609a4](https://github.com/wangy1931/cloudwiz-web/commit/84609a4))
* **panel resize:** fixed panel resize drag handling ([03f91e8](https://github.com/wangy1931/cloudwiz-web/commit/03f91e8))
* **panel timeshift:** fixed so that panel time range works when dashboard time range does not end in now, like  and , fixes [#3941](https://github.com/wangy1931/cloudwiz-web/issues/3941) ([edf5868](https://github.com/wangy1931/cloudwiz-web/commit/edf5868))
* **panels:** avoid deep copy problem for panel defaults ([16dbf31](https://github.com/wangy1931/cloudwiz-web/commit/16dbf31))
* **panels:** restored panel name to edit mode ([2d8180f](https://github.com/wangy1931/cloudwiz-web/commit/2d8180f))
* **phantomjs:** another fix for phantomjs rendering, [#3804](https://github.com/wangy1931/cloudwiz-web/issues/3804) ([bc05cc4](https://github.com/wangy1931/cloudwiz-web/commit/bc05cc4))
* **phantomjs:** upgrades to 2.1.1 for ssl support ([a08809f](https://github.com/wangy1931/cloudwiz-web/commit/a08809f)), closes [#4371](https://github.com/wangy1931/cloudwiz-web/issues/4371)
* **playlist:** add nginject for prod build ([eb8871a](https://github.com/wangy1931/cloudwiz-web/commit/eb8871a))
* **playlist:** dont swallow errors ([d523d45](https://github.com/wangy1931/cloudwiz-web/commit/d523d45))
* **playlist:** fix broken build. unused vars ([455948a](https://github.com/wangy1931/cloudwiz-web/commit/455948a))
* **playlist:** fix for memory leak when running playlist for a long period, fixes [#3794](https://github.com/wangy1931/cloudwiz-web/issues/3794) ([4f7f03a](https://github.com/wangy1931/cloudwiz-web/commit/4f7f03a))
* **playlist:** fix for timespan -> interval ([cabefa4](https://github.com/wangy1931/cloudwiz-web/commit/cabefa4))
* **playlist:** fixes broken search filter ([1da1849](https://github.com/wangy1931/cloudwiz-web/commit/1da1849))
* **playlist:** fixes failed refactoring ([e16f45e](https://github.com/wangy1931/cloudwiz-web/commit/e16f45e))
* **playlist:** give buttons more space to not squash ([a2b69e9](https://github.com/wangy1931/cloudwiz-web/commit/a2b69e9))
* **playlist:** implement api according to new standard ([22c001c](https://github.com/wangy1931/cloudwiz-web/commit/22c001c))
* **playlist:** move backend code to ctrl ([d15b0bf](https://github.com/wangy1931/cloudwiz-web/commit/d15b0bf))
* **playlist:** move dashboard uri cration to Backend ([0918063](https://github.com/wangy1931/cloudwiz-web/commit/0918063))
* **playlist:** new url for viewing playlist ([07fdf64](https://github.com/wangy1931/cloudwiz-web/commit/07fdf64))
* **playlist:** remove invalid logging ([458d150](https://github.com/wangy1931/cloudwiz-web/commit/458d150))
* **playlist:** remove only parameter to describe ([85a463f](https://github.com/wangy1931/cloudwiz-web/commit/85a463f))
* **playlist:** remove start button from edit page ([fb4bb7f](https://github.com/wangy1931/cloudwiz-web/commit/fb4bb7f))
* **playlists:** fixed url in playlist view when using sub url, fixes [#3711](https://github.com/wangy1931/cloudwiz-web/issues/3711) ([a147015](https://github.com/wangy1931/cloudwiz-web/commit/a147015))
* **pluginlist:** fixed issue with home dashboard and new pluginlist panel that casued permission denied error for non admin users, fixes [#4686](https://github.com/wangy1931/cloudwiz-web/issues/4686) ([10131aa](https://github.com/wangy1931/cloudwiz-web/commit/10131aa))
* **pluginlist:** fixed issue with pluginlist link, fixes [#4705](https://github.com/wangy1931/cloudwiz-web/issues/4705) ([6216ce4](https://github.com/wangy1931/cloudwiz-web/commit/6216ce4))
* **plugins:** Fix broken link in plugins readme ([b39aa02](https://github.com/wangy1931/cloudwiz-web/commit/b39aa02))
* **plugins:** Fix broken link in plugins readme ([860e771](https://github.com/wangy1931/cloudwiz-web/commit/860e771))
* **plugins:** fix for default plugin dif ([01d47fb](https://github.com/wangy1931/cloudwiz-web/commit/01d47fb))
* **plugins:** fixed failing unit tests, fixes [#4280](https://github.com/wangy1931/cloudwiz-web/issues/4280) ([d2aaa22](https://github.com/wangy1931/cloudwiz-web/commit/d2aaa22))
* **plugins:** fixes broken link ([85466c7](https://github.com/wangy1931/cloudwiz-web/commit/85466c7))
* **plugins:** fixes broken plugin link ([c1e4d05](https://github.com/wangy1931/cloudwiz-web/commit/c1e4d05))
* **plugins:** fixes missed dist loading for plugindir ([00dd0e8](https://github.com/wangy1931/cloudwiz-web/commit/00dd0e8)), closes [#4230](https://github.com/wangy1931/cloudwiz-web/issues/4230)
* **plugins:** only add app nav link if it has any pages/dashboards with role matching current user, fixes [#4784](https://github.com/wangy1931/cloudwiz-web/issues/4784) ([04a7917](https://github.com/wangy1931/cloudwiz-web/commit/04a7917))
* **plugins:** removes warnings for missing folder ([5792a16](https://github.com/wangy1931/cloudwiz-web/commit/5792a16)), closes [#3663](https://github.com/wangy1931/cloudwiz-web/issues/3663)
* **plugins:** scans default plugin path ([83346a2](https://github.com/wangy1931/cloudwiz-web/commit/83346a2))
* **png rendering:** fixed broken png rendering due to recent panel change ([bf1b605](https://github.com/wangy1931/cloudwiz-web/commit/bf1b605))
* **png rendering:** removed --ssl-protocol=any phantomjs param ([49fdf84](https://github.com/wangy1931/cloudwiz-web/commit/49fdf84))
* **postcss:** change sourcemap output folder ([fadfa7c](https://github.com/wangy1931/cloudwiz-web/commit/fadfa7c))
* **postgres:** fixed issue with postgres caused by wrong prefrences table types, dropped table and created it with correct column types, fixes [#4558](https://github.com/wangy1931/cloudwiz-web/issues/4558) ([9b30634](https://github.com/wangy1931/cloudwiz-web/commit/9b30634))
* **postgres:** If password or user is empty use empty quotes for connection string, [#3985](https://github.com/wangy1931/cloudwiz-web/issues/3985) ([b5dc172](https://github.com/wangy1931/cloudwiz-web/commit/b5dc172))
* **profile:** fixed change password link and page, fixes [#4542](https://github.com/wangy1931/cloudwiz-web/issues/4542) ([43ebc17](https://github.com/wangy1931/cloudwiz-web/commit/43ebc17))
* **prometheus:** added template variable escape format to prometheus annotations queries, fixes [#4656](https://github.com/wangy1931/cloudwiz-web/issues/4656) ([329ee8d](https://github.com/wangy1931/cloudwiz-web/commit/329ee8d))
* **prometheus:** fixed templating issue with prometheus for when using variable with non regex operator, [#2918](https://github.com/wangy1931/cloudwiz-web/issues/2918) ([0da4168](https://github.com/wangy1931/cloudwiz-web/commit/0da4168))
* **prometheus:** set default templating format to pipe ([30f3b55](https://github.com/wangy1931/cloudwiz-web/commit/30f3b55))
* **query editors:** added select style to segment, used by data source selector ([bbf4d00](https://github.com/wangy1931/cloudwiz-web/commit/bbf4d00))
* **renderer:** add .exe for phantomjs on windows ([6a7e913](https://github.com/wangy1931/cloudwiz-web/commit/6a7e913)), closes [#3657](https://github.com/wangy1931/cloudwiz-web/issues/3657)
* **row editor:** row editor fix and cleanup of unused code ([660ce3a](https://github.com/wangy1931/cloudwiz-web/commit/660ce3a))
* **row repeat:** fix for row repeat where repeated row was added to the bottom and not next to the source row, fixes [#2942](https://github.com/wangy1931/cloudwiz-web/issues/2942) ([a167eb4](https://github.com/wangy1931/cloudwiz-web/commit/a167eb4))
* **sass:** fixes sass lint issue ([db15bf2](https://github.com/wangy1931/cloudwiz-web/commit/db15bf2))
* **search:** add missing ctrl property in view ([4b59cee](https://github.com/wangy1931/cloudwiz-web/commit/4b59cee))
* **search:** fixes broken esc button in search ([f384538](https://github.com/wangy1931/cloudwiz-web/commit/f384538))
* **search:** fixes missing tags in result ([0b05d39](https://github.com/wangy1931/cloudwiz-web/commit/0b05d39))
* **search:** remove old search ctrl ([13d993a](https://github.com/wangy1931/cloudwiz-web/commit/13d993a))
* **series overrides:** graph no rerenders with new styles after updating series override, fixes [#4621](https://github.com/wangy1931/cloudwiz-web/issues/4621) ([1a29a76](https://github.com/wangy1931/cloudwiz-web/commit/1a29a76))
* **settings:** make headline more informative ([26f70a5](https://github.com/wangy1931/cloudwiz-web/commit/26f70a5))
* **share:** fixed checkboxes in share modal, fixes [#4301](https://github.com/wangy1931/cloudwiz-web/issues/4301) ([de41536](https://github.com/wangy1931/cloudwiz-web/commit/de41536))
* **sidemenu:** added missing login link ([77c362a](https://github.com/wangy1931/cloudwiz-web/commit/77c362a))
* **sidemenu:** fixed issue with new sidemenu in optimized build, [#3687](https://github.com/wangy1931/cloudwiz-web/issues/3687) ([317b5e6](https://github.com/wangy1931/cloudwiz-web/commit/317b5e6))
* **single_stat:** rounding bug in value => text ([c30c12d](https://github.com/wangy1931/cloudwiz-web/commit/c30c12d))
* **singlestat:** add ngInject for controller ([64fa9a6](https://github.com/wangy1931/cloudwiz-web/commit/64fa9a6)), closes [#3879](https://github.com/wangy1931/cloudwiz-web/issues/3879)
* **singlestat:** adds support for fontsizes in gagues ([0c6841b](https://github.com/wangy1931/cloudwiz-web/commit/0c6841b))
* **singlestat:** adds support for lighttheme ([0108b5e](https://github.com/wangy1931/cloudwiz-web/commit/0108b5e))
* **singlestat:** enables autoupdate on change ([9316bcf](https://github.com/wangy1931/cloudwiz-web/commit/9316bcf)), closes [#4809](https://github.com/wangy1931/cloudwiz-web/issues/4809) [#4812](https://github.com/wangy1931/cloudwiz-web/issues/4812)
* **singlestat:** fix bug in threshold calculations ([1210fca](https://github.com/wangy1931/cloudwiz-web/commit/1210fca))
* **singlestat:** fix for singlestat background and sparklines, fixes [#3955](https://github.com/wangy1931/cloudwiz-web/issues/3955) ([a5d1e9e](https://github.com/wangy1931/cloudwiz-web/commit/a5d1e9e))
* **singlestat:** fixed issue with singlestat and drilldown link introduced in recent commit, fixes [#3777](https://github.com/wangy1931/cloudwiz-web/issues/3777) ([1d4803c](https://github.com/wangy1931/cloudwiz-web/commit/1d4803c))
* **singlestat:** fixes font size diffs for gauge ([79ed99a](https://github.com/wangy1931/cloudwiz-web/commit/79ed99a))
* **singlestat:** start timer for refreshs ([513aa61](https://github.com/wangy1931/cloudwiz-web/commit/513aa61))
* **singlestat:** use exact value for coloring ([57ecb27](https://github.com/wangy1931/cloudwiz-web/commit/57ecb27)), closes [#4259](https://github.com/wangy1931/cloudwiz-web/issues/4259)
* **snapshot:** fixed snapshot header, fixes [#4094](https://github.com/wangy1931/cloudwiz-web/issues/4094) ([e4d52b2](https://github.com/wangy1931/cloudwiz-web/commit/e4d52b2))
* **snapshots:** Fixed issue with empty snapshots, fixes [#4706](https://github.com/wangy1931/cloudwiz-web/issues/4706) ([6355896](https://github.com/wangy1931/cloudwiz-web/commit/6355896))
* **snapshots:** fixed share nav link in snapshots, fixes [#4172](https://github.com/wangy1931/cloudwiz-web/issues/4172) ([62d703f](https://github.com/wangy1931/cloudwiz-web/commit/62d703f))
* **snapshots:** fixed snapshot issue introdiuced yesterday ([aa98ada](https://github.com/wangy1931/cloudwiz-web/commit/aa98ada))
* **snapshots:** sets default value for snapshot name ([51de894](https://github.com/wangy1931/cloudwiz-web/commit/51de894)), closes [#4778](https://github.com/wangy1931/cloudwiz-web/issues/4778)
* **submenu:** added ngInject comment to dashboard submenu ([5f5fcc0](https://github.com/wangy1931/cloudwiz-web/commit/5f5fcc0))
* **switchorg:** fixes broken redirect when switchin org ([4110c7f](https://github.com/wangy1931/cloudwiz-web/commit/4110c7f))
* **systemjs:** systemjs config fix for plugins ([71d718a](https://github.com/wangy1931/cloudwiz-web/commit/71d718a))
* **table:** another fix for table panel sorting, fixes [#4544](https://github.com/wangy1931/cloudwiz-web/issues/4544) ([892e79a](https://github.com/wangy1931/cloudwiz-web/commit/892e79a))
* **table:** escape / chars as well ([ddb1d0c](https://github.com/wangy1931/cloudwiz-web/commit/ddb1d0c))
* **table:** fixed issue with table panel and annotations, fixes [#4563](https://github.com/wangy1931/cloudwiz-web/issues/4563) ([3c1e9e9](https://github.com/wangy1931/cloudwiz-web/commit/3c1e9e9))
* **table:** remove html for htmlencoding option ([7d89cf2](https://github.com/wangy1931/cloudwiz-web/commit/7d89cf2))
* **table:** table column sorting fix ([5d652dc](https://github.com/wangy1931/cloudwiz-web/commit/5d652dc))
* **table panel:** fixed column sort issue with table panel, [#4532](https://github.com/wangy1931/cloudwiz-web/issues/4532) ([1c97f10](https://github.com/wangy1931/cloudwiz-web/commit/1c97f10))
* **table panel:** fixed issue with string array formating, fixes [#4791](https://github.com/wangy1931/cloudwiz-web/issues/4791) ([723bfa7](https://github.com/wangy1931/cloudwiz-web/commit/723bfa7))
* **table panel:** fixed issue with table panel in optimized builds, closes [#3702](https://github.com/wangy1931/cloudwiz-web/issues/3702) ([2b99b64](https://github.com/wangy1931/cloudwiz-web/commit/2b99b64))
* **tablepanel:** change to using two thresholds ([8ff9975](https://github.com/wangy1931/cloudwiz-web/commit/8ff9975)), closes [#3878](https://github.com/wangy1931/cloudwiz-web/issues/3878)
* **templaing:** refactoring PR [#4283](https://github.com/wangy1931/cloudwiz-web/issues/4283) ([2475ca8](https://github.com/wangy1931/cloudwiz-web/commit/2475ca8))
* **templating:** another fix for templating and custom all value escaping, fixes [#4787](https://github.com/wangy1931/cloudwiz-web/issues/4787) ([1dfeb19](https://github.com/wangy1931/cloudwiz-web/commit/1dfeb19))
* **templating:** fixed encoding of all value for regex, and custom all value, fixes [#4755](https://github.com/wangy1931/cloudwiz-web/issues/4755), fixes [#4736](https://github.com/wangy1931/cloudwiz-web/issues/4736) ([bd21a08](https://github.com/wangy1931/cloudwiz-web/commit/bd21a08))
* **templating:** fixed issue with custom all value, fixes [#4219](https://github.com/wangy1931/cloudwiz-web/issues/4219) ([3c30870](https://github.com/wangy1931/cloudwiz-web/commit/3c30870))
* **templating:** fixed issue with template variables that use regex extraction, fixes [#4672](https://github.com/wangy1931/cloudwiz-web/issues/4672) ([7456514](https://github.com/wangy1931/cloudwiz-web/commit/7456514))
* **templating:** make checkboxes a new row ([86b1906](https://github.com/wangy1931/cloudwiz-web/commit/86b1906))
* **tests:** fix broken unittest due to merge conflict ([c48da9b](https://github.com/wangy1931/cloudwiz-web/commit/c48da9b))
* **tests:** remove only in spec ([72a6438](https://github.com/wangy1931/cloudwiz-web/commit/72a6438))
* **text panel:** fix for text panel in optimized builds, introduced in recent commit due to plugin api changes ([2ccc191](https://github.com/wangy1931/cloudwiz-web/commit/2ccc191))
* **text panel:** fixed escaping issue with markdown in text panel, fixes [#4409](https://github.com/wangy1931/cloudwiz-web/issues/4409) ([6d36641](https://github.com/wangy1931/cloudwiz-web/commit/6d36641))
* **timepicker:** fixed issues and added some polish to timepicker shift back/forward buttons ([3ab5427](https://github.com/wangy1931/cloudwiz-web/commit/3ab5427))
* **timepicker:** fixed issues and added some polish to timepicker shift back/forward buttons ([e822fad](https://github.com/wangy1931/cloudwiz-web/commit/e822fad))
* **timepicker:** fixed recent breaking of datetime picker when swithing from requirejs to systemjs ([52644bb](https://github.com/wangy1931/cloudwiz-web/commit/52644bb))
* **tooltip:** msdetection can now handle null data points ([98e756e](https://github.com/wangy1931/cloudwiz-web/commit/98e756e))
* **unit tests:** moved kairosdb spec to it's plugin repo ([6ed36e0](https://github.com/wangy1931/cloudwiz-web/commit/6ed36e0))
* **unsaved changes:** fix for unsaved changes warning when changing time range to relative rime range, [#4176](https://github.com/wangy1931/cloudwiz-web/issues/4176) ([9cebcc4](https://github.com/wangy1931/cloudwiz-web/commit/9cebcc4))
* **ux:** css fix for tabbed view caused edit views in dashboard to create horizontal scrollbar ([0c21d2c](https://github.com/wangy1931/cloudwiz-web/commit/0c21d2c))
* **ux:** fixed broken tight forms (mainly query editors) ([b9c6012](https://github.com/wangy1931/cloudwiz-web/commit/b9c6012))
* **ux:** fixed hidden overflow text in api key modal, fixes [#4263](https://github.com/wangy1931/cloudwiz-web/issues/4263) ([7df1867](https://github.com/wangy1931/cloudwiz-web/commit/7df1867))
* **ux:** fixed panel json edit view ([92efd17](https://github.com/wangy1931/cloudwiz-web/commit/92efd17))
* **ux:** fixed select box appearance in firefox, fixes [#4168](https://github.com/wangy1931/cloudwiz-web/issues/4168) ([352cdc1](https://github.com/wangy1931/cloudwiz-web/commit/352cdc1))
* **ux:** fixed ux issue in new cards data source list, now handles overflowing urls and titles, fixes [#4403](https://github.com/wangy1931/cloudwiz-web/issues/4403) ([73e5c70](https://github.com/wangy1931/cloudwiz-web/commit/73e5c70))
* **windows:** exclude syslog feature from windows builds ([b63471e](https://github.com/wangy1931/cloudwiz-web/commit/b63471e))
* A Datasource with null jsonData would make Grafana fail to load page, fixes [#4536](https://github.com/wangy1931/cloudwiz-web/issues/4536) ([a2c6469](https://github.com/wangy1931/cloudwiz-web/commit/a2c6469))
* admin stats and postgres ([9c14b96](https://github.com/wangy1931/cloudwiz-web/commit/9c14b96))
* another test fix ([105a678](https://github.com/wangy1931/cloudwiz-web/commit/105a678))
* back to dashboard link fix ([89ef019](https://github.com/wangy1931/cloudwiz-web/commit/89ef019))
* changed graph panel tooltip higlight style ([859ef48](https://github.com/wangy1931/cloudwiz-web/commit/859ef48))
* clicking on items in graphites add function menu did not work, now works again, broken in recent panel refactorings ([4e33e80](https://github.com/wangy1931/cloudwiz-web/commit/4e33e80))
* data push fix ([963e202](https://github.com/wangy1931/cloudwiz-web/commit/963e202))
* fix failing build and removed panel icon from edit mode tabs ([97c2766](https://github.com/wangy1931/cloudwiz-web/commit/97c2766))
* fixed changed partials paths ([d2b0bad](https://github.com/wangy1931/cloudwiz-web/commit/d2b0bad))
* fixed failing test ([319b934](https://github.com/wangy1931/cloudwiz-web/commit/319b934))
* fixed failing unit test ([431a610](https://github.com/wangy1931/cloudwiz-web/commit/431a610))
* fixed from db -> json ([40b2f00](https://github.com/wangy1931/cloudwiz-web/commit/40b2f00))
* fixed issue with scripted dashboard example, fixes [#4579](https://github.com/wangy1931/cloudwiz-web/issues/4579) ([a27d72b](https://github.com/wangy1931/cloudwiz-web/commit/a27d72b))
* fixed issue with series override color selector when using the mouse to select color option, fixes [#4620](https://github.com/wangy1931/cloudwiz-web/issues/4620) ([52e2091](https://github.com/wangy1931/cloudwiz-web/commit/52e2091))
* fixed issue with templating preview, fixes [#4714](https://github.com/wangy1931/cloudwiz-web/issues/4714) ([4f2628c](https://github.com/wangy1931/cloudwiz-web/commit/4f2628c))
* fixed minor issue in data source info popover, fixes [#4576](https://github.com/wangy1931/cloudwiz-web/issues/4576) ([1666415](https://github.com/wangy1931/cloudwiz-web/commit/1666415))
* fixed panel resize and fullscreen panel height issue ([b85b5e0](https://github.com/wangy1931/cloudwiz-web/commit/b85b5e0))
* fixed sass lint warning ([7031645](https://github.com/wangy1931/cloudwiz-web/commit/7031645))
* fixed systemjs config for test ([773a13d](https://github.com/wangy1931/cloudwiz-web/commit/773a13d))
* gradient hover only on main submenu item ([8f3b6a2](https://github.com/wangy1931/cloudwiz-web/commit/8f3b6a2))
* karma now works again, broken in last commit ([3a1dff6](https://github.com/wangy1931/cloudwiz-web/commit/3a1dff6))
* let binding cycle complete before adding panel to dom ([00827ce](https://github.com/wangy1931/cloudwiz-web/commit/00827ce))
* made plugin settings api call accessable for viewer roles ([d9ad4cf](https://github.com/wangy1931/cloudwiz-web/commit/d9ad4cf))
* minor fix for event emitter ([34cb175](https://github.com/wangy1931/cloudwiz-web/commit/34cb175))
* minor fix for plugin page, fixes [#4578](https://github.com/wangy1931/cloudwiz-web/issues/4578) ([7f8f5f3](https://github.com/wangy1931/cloudwiz-web/commit/7f8f5f3))
* minor query editor fix ([5a241a8](https://github.com/wangy1931/cloudwiz-web/commit/5a241a8))
* package.json use local grunt in postinstall script ([714129c](https://github.com/wangy1931/cloudwiz-web/commit/714129c))
* remove only usage in tests ([7e66d0b](https://github.com/wangy1931/cloudwiz-web/commit/7e66d0b))
* removed css background that should not have been there in last commit ([3781a09](https://github.com/wangy1931/cloudwiz-web/commit/3781a09))
* removed obsolete call to setTimeQueryStart ([e8a209c](https://github.com/wangy1931/cloudwiz-web/commit/e8a209c))
* renamed plugin.json for wip for new work in progress data source ([585503f](https://github.com/wangy1931/cloudwiz-web/commit/585503f))
* singlestat init ([4058c85](https://github.com/wangy1931/cloudwiz-web/commit/4058c85))
* spelling fix in templating editor ([6b467d5](https://github.com/wangy1931/cloudwiz-web/commit/6b467d5))
* unit tests ([9653f43](https://github.com/wangy1931/cloudwiz-web/commit/9653f43))
* updated changelog and version to beta3 ([43896dc](https://github.com/wangy1931/cloudwiz-web/commit/43896dc))
* various fixes to snapshots ([aa8bd04](https://github.com/wangy1931/cloudwiz-web/commit/aa8bd04))
* zoom out tooltip fix, fixes [#4729](https://github.com/wangy1931/cloudwiz-web/issues/4729) ([0f16066](https://github.com/wangy1931/cloudwiz-web/commit/0f16066))


### Features

* **annotations:** more work on new annotations ([cd52c24](https://github.com/wangy1931/cloudwiz-web/commit/cd52c24))
* **annotations:** updated editor, removed line color and icon size ([2e52008](https://github.com/wangy1931/cloudwiz-web/commit/2e52008))
* **annotations:** updated flot events lib and refactored it to use tether-drop lib ([a6a5f39](https://github.com/wangy1931/cloudwiz-web/commit/a6a5f39))
* **app routes:** worked on app routes, added unit test, changed Grafana-Context header to start with X to be standard compliant, got cloud saas queries to work via app route feature and header template ([37c6a1d](https://github.com/wangy1931/cloudwiz-web/commit/37c6a1d))
* **apps:** began work on app pages ([18eb9d6](https://github.com/wangy1931/cloudwiz-web/commit/18eb9d6))
* **apps:** began work on support for apps that contain data sources ([fe2e6b8](https://github.com/wangy1931/cloudwiz-web/commit/fe2e6b8))
* **apps:** changed edit apps view to use plugin-component for apps config view ([0fab210](https://github.com/wangy1931/cloudwiz-web/commit/0fab210))
* **apps:** lots of more work on apps, changed app_plugin to app_settings in order to to confuse the app plugin model (definition) and app org settings ([c1e94e6](https://github.com/wangy1931/cloudwiz-web/commit/c1e94e6))
* **apps:** lots of progress ([7a8b3c4](https://github.com/wangy1931/cloudwiz-web/commit/7a8b3c4))
* **apps:** lots of work making apps easier to develop, module paths are handled automatically ([baff9b0](https://github.com/wangy1931/cloudwiz-web/commit/baff9b0))
* **apps:** mini update to apps config view ([aa32459](https://github.com/wangy1931/cloudwiz-web/commit/aa32459))
* **apps:** minor design update for apps view ([6b85a6f](https://github.com/wangy1931/cloudwiz-web/commit/6b85a6f))
* **apps:** minor fix for images ([2fe5846](https://github.com/wangy1931/cloudwiz-web/commit/2fe5846))
* **apps:** minor progress ([ffe1407](https://github.com/wangy1931/cloudwiz-web/commit/ffe1407))
* **apps:** minor progress on app meta data ([41a0995](https://github.com/wangy1931/cloudwiz-web/commit/41a0995))
* **apps:** minor progress on apps edit view ([d932653](https://github.com/wangy1931/cloudwiz-web/commit/d932653))
* **apps:** minor progress to apps list ([4da3129](https://github.com/wangy1931/cloudwiz-web/commit/4da3129))
* **apps:** more progress on app pages ([0def04a](https://github.com/wangy1931/cloudwiz-web/commit/0def04a))
* **apps:** more work on app pages and sidemenu subnav ([9dcfe6d](https://github.com/wangy1931/cloudwiz-web/commit/9dcfe6d))
* **apps:** more work on apps and how apps can include panels ([7a26d30](https://github.com/wangy1931/cloudwiz-web/commit/7a26d30))
* **apps:** moving things around ([f67563e](https://github.com/wangy1931/cloudwiz-web/commit/f67563e))
* **apps:** pages work ([a15984b](https://github.com/wangy1931/cloudwiz-web/commit/a15984b))
* **apps:** removed some on hover stuff from sidemenu to make it ready to merge to master ([f0ecbd3](https://github.com/wangy1931/cloudwiz-web/commit/f0ecbd3))
* **apps:** rewrote appsCtrl to app_list_ctrl and to typescript ([d0dead0](https://github.com/wangy1931/cloudwiz-web/commit/d0dead0))
* **apps:** WIP progress app views ([b8cb5e0](https://github.com/wangy1931/cloudwiz-web/commit/b8cb5e0))
* **apps:** work on plugin directives loading ([b55f821](https://github.com/wangy1931/cloudwiz-web/commit/b55f821))
* **apps:** worked on apps edit view styles ([4c59e48](https://github.com/wangy1931/cloudwiz-web/commit/4c59e48))
* **apps:** worked on pinning apps ([e081a5c](https://github.com/wangy1931/cloudwiz-web/commit/e081a5c))
* **avatar:** added server side proxy and cache of gravatar requests ([08f7ccf](https://github.com/wangy1931/cloudwiz-web/commit/08f7ccf))
* **backendsrv:** improves error response handling ([86a274a](https://github.com/wangy1931/cloudwiz-web/commit/86a274a)), closes [#4428](https://github.com/wangy1931/cloudwiz-web/issues/4428)
* **build:** make build more generic for executables ([9c50b89](https://github.com/wangy1931/cloudwiz-web/commit/9c50b89))
* **build:** make symlink script executible ([d94896c](https://github.com/wangy1931/cloudwiz-web/commit/d94896c))
* **build:** move grafana into grafana-server ([6e7813f](https://github.com/wangy1931/cloudwiz-web/commit/6e7813f))
* **circleci:** triggers grafana packer after successful build ([448437c](https://github.com/wangy1931/cloudwiz-web/commit/448437c))
* **cli:** add command for upgrading one plugin ([4131d8b](https://github.com/wangy1931/cloudwiz-web/commit/4131d8b))
* **cli:** add grafana net url ([8da702c](https://github.com/wangy1931/cloudwiz-web/commit/8da702c))
* **cli:** add grafana-cli to linux packages ([063b54a](https://github.com/wangy1931/cloudwiz-web/commit/063b54a))
* **cli:** add logging to catch panics ([7ef62d2](https://github.com/wangy1931/cloudwiz-web/commit/7ef62d2))
* **cli:** add more logging for failed install ([a8c68e3](https://github.com/wangy1931/cloudwiz-web/commit/a8c68e3))
* **cli:** add suppot for plugindir as environment variable ([1ff4280](https://github.com/wangy1931/cloudwiz-web/commit/1ff4280))
* **cli:** add uninstall alias for remove ([2fd25f0](https://github.com/wangy1931/cloudwiz-web/commit/2fd25f0))
* **cli:** adds better support for plugin folder in dev ([583c0f0](https://github.com/wangy1931/cloudwiz-web/commit/583c0f0))
* **cli:** adds some amazing colors ([95de5f6](https://github.com/wangy1931/cloudwiz-web/commit/95de5f6))
* **cli:** adds some colors to ls command ([a12f537](https://github.com/wangy1931/cloudwiz-web/commit/a12f537))
* **cli:** allow redirect for plugin-repo.json ([6670e6c](https://github.com/wangy1931/cloudwiz-web/commit/6670e6c))
* **cli:** detects plugin folder for dev env ([a5eda6a](https://github.com/wangy1931/cloudwiz-web/commit/a5eda6a)), closes [#4572](https://github.com/wangy1931/cloudwiz-web/issues/4572)
* **cli:** disable dependecy downloads until needed ([788aaff](https://github.com/wangy1931/cloudwiz-web/commit/788aaff))
* **cli:** improve error handling for missing plugin dir ([f5bb2b1](https://github.com/wangy1931/cloudwiz-web/commit/f5bb2b1))
* **cli:** improve error message for missing permission ([8e70e9c](https://github.com/wangy1931/cloudwiz-web/commit/8e70e9c))
* **cli:** improve helptext for cli ([eeb7524](https://github.com/wangy1931/cloudwiz-web/commit/eeb7524))
* **cli:** improves defer error handling ([0855f51](https://github.com/wangy1931/cloudwiz-web/commit/0855f51))
* **cli:** improves error message for 401 requests ([5094c1d](https://github.com/wangy1931/cloudwiz-web/commit/5094c1d))
* **cli:** make all plugin commands subcommands ([7f8643e](https://github.com/wangy1931/cloudwiz-web/commit/7f8643e))
* **cli:** make repo url a parameter ([f6c5242](https://github.com/wangy1931/cloudwiz-web/commit/f6c5242))
* **cli:** move cli into main repo ([d59beec](https://github.com/wangy1931/cloudwiz-web/commit/d59beec))
* **cli:** support for asking grafana net about plugins ([fee0745](https://github.com/wangy1931/cloudwiz-web/commit/fee0745))
* **cli:** use built in envvar support ([14df3c6](https://github.com/wangy1931/cloudwiz-web/commit/14df3c6))
* **cli:** use commandline object all the way ([95f3e52](https://github.com/wangy1931/cloudwiz-web/commit/95f3e52))
* **cloudwatch:** add more metrics for Route53 ([d183c11](https://github.com/wangy1931/cloudwiz-web/commit/d183c11)), closes [#4053](https://github.com/wangy1931/cloudwiz-web/issues/4053)
* **css:** minor css tweaks ([80e15dd](https://github.com/wangy1931/cloudwiz-web/commit/80e15dd))
* **csv export:** extract csv export into a new file ([ba65b89](https://github.com/wangy1931/cloudwiz-web/commit/ba65b89))
* **dashlist:** add info text about recently viewed beeing stored in localstorage ([d8f7bce](https://github.com/wangy1931/cloudwiz-web/commit/d8f7bce)), closes [#4206](https://github.com/wangy1931/cloudwiz-web/issues/4206)
* **dashlist:** add support for scripted dashboards ([606c751](https://github.com/wangy1931/cloudwiz-web/commit/606c751)), closes [#4207](https://github.com/wangy1931/cloudwiz-web/issues/4207)
* **dashlist:** list last x viewed dashboards ([e5970e8](https://github.com/wangy1931/cloudwiz-web/commit/e5970e8)), closes [#3896](https://github.com/wangy1931/cloudwiz-web/issues/3896)
* **dashlist:** stores recently visited dashboards per orgid ([ed1864e](https://github.com/wangy1931/cloudwiz-web/commit/ed1864e))
* **dashlist:** updated dashlist ([31441f0](https://github.com/wangy1931/cloudwiz-web/commit/31441f0))
* **dashslist:** make sure dashbords exists in recently viewd dashboards ([dd7e215](https://github.com/wangy1931/cloudwiz-web/commit/dd7e215)), closes [#4249](https://github.com/wangy1931/cloudwiz-web/issues/4249)
* **data source observerable:** started work on handling data source observerable ([a738945](https://github.com/wangy1931/cloudwiz-web/commit/a738945))
* **dataproxy:** remove 'SetCookie' from reponse ([34eb5ac](https://github.com/wangy1931/cloudwiz-web/commit/34eb5ac)), closes [#3845](https://github.com/wangy1931/cloudwiz-web/issues/3845)
* **dataproxy:** set flush interval, need a setting for this ([e63ff1c](https://github.com/wangy1931/cloudwiz-web/commit/e63ff1c))
* **datasource:** add type to datasource list ([05ba32b](https://github.com/wangy1931/cloudwiz-web/commit/05ba32b)), closes [#4183](https://github.com/wangy1931/cloudwiz-web/issues/4183)
* **datasources:** last fixes for data sources ([b1bfd35](https://github.com/wangy1931/cloudwiz-web/commit/b1bfd35))
* **datasources:** minor fix for optimized build for the refactored query editors ([de39431](https://github.com/wangy1931/cloudwiz-web/commit/de39431))
* **ds observable:** minor progress on handling data source observable ([79a803e](https://github.com/wangy1931/cloudwiz-web/commit/79a803e))
* **editorconfig:** add config for go files ([da2b65c](https://github.com/wangy1931/cloudwiz-web/commit/da2b65c))
* **elastic:** change concept to trim edges instead. ([dc30b9d](https://github.com/wangy1931/cloudwiz-web/commit/dc30b9d))
* **elastic:** isolate drop first and last logic ([26abce6](https://github.com/wangy1931/cloudwiz-web/commit/26abce6))
* **elastic:** shorten expression to target input ([37cfe2a](https://github.com/wangy1931/cloudwiz-web/commit/37cfe2a))
* **elasticsearch:** added geo hash bucket aggregation ([69c2faf](https://github.com/wangy1931/cloudwiz-web/commit/69c2faf))
* **elasticsearch:** added unit option to derivative metric, closes [#3512](https://github.com/wangy1931/cloudwiz-web/issues/3512) ([aca9d39](https://github.com/wangy1931/cloudwiz-web/commit/aca9d39))
* **elasticsearch:** move default query parameters to new table ([80d757b](https://github.com/wangy1931/cloudwiz-web/commit/80d757b))
* **elasticsearch:** trim edges, minor refactoring of [#3541](https://github.com/wangy1931/cloudwiz-web/issues/3541) ([16847fd](https://github.com/wangy1931/cloudwiz-web/commit/16847fd))
* **example:** add basic annotation support for ds ([1d8222e](https://github.com/wangy1931/cloudwiz-web/commit/1d8222e))
* **example:** turn panel into metrics panel ([f3b915c](https://github.com/wangy1931/cloudwiz-web/commit/f3b915c))
* **examples:** add datasource plugin example ([3435df8](https://github.com/wangy1931/cloudwiz-web/commit/3435df8))
* **fonts:** download fonts from grafana instead of CDN ([99e0686](https://github.com/wangy1931/cloudwiz-web/commit/99e0686)), closes [#4223](https://github.com/wangy1931/cloudwiz-web/issues/4223)
* **gauge:** polish to gauge, better handling of automatic font size, added option to hide threshold markers ([26eeb65](https://github.com/wangy1931/cloudwiz-web/commit/26eeb65))
* **grafana_live:** more work pushing data to websocket, [#4355](https://github.com/wangy1931/cloudwiz-web/issues/4355) ([2e1f260](https://github.com/wangy1931/cloudwiz-web/commit/2e1f260))
* **grafana-cli:** minor changes ([1e44ee9](https://github.com/wangy1931/cloudwiz-web/commit/1e44ee9))
* **graph:** add spacing above Series specific overrides ([8e11f8d](https://github.com/wangy1931/cloudwiz-web/commit/8e11f8d))
* **graph:** sets fixed height for right side legend ([73bed38](https://github.com/wangy1931/cloudwiz-web/commit/73bed38)), closes [#1277](https://github.com/wangy1931/cloudwiz-web/issues/1277)
* **graph:** updating graph panel to new format progress ([ebba7a0](https://github.com/wangy1931/cloudwiz-web/commit/ebba7a0))
* **graph panel:** changed to PR [#4493](https://github.com/wangy1931/cloudwiz-web/issues/4493) and other polish, removed the relative time from graph tooltip, did not think it worked that well ([22b11d7](https://github.com/wangy1931/cloudwiz-web/commit/22b11d7))
* **graphite:** add optional parameter for perSecond ([28ec6b4](https://github.com/wangy1931/cloudwiz-web/commit/28ec6b4)), closes [#966](https://github.com/wangy1931/cloudwiz-web/issues/966)
* **graphite:** added stddevSeries func def, closes [#4782](https://github.com/wangy1931/cloudwiz-web/issues/4782) ([8b656f1](https://github.com/wangy1931/cloudwiz-web/commit/8b656f1))
* **graphite:** adds support for grep function ([48539c8](https://github.com/wangy1931/cloudwiz-web/commit/48539c8)), closes [#1163](https://github.com/wangy1931/cloudwiz-web/issues/1163)
* **graphite:** make sortByName optional ([12889a9](https://github.com/wangy1931/cloudwiz-web/commit/12889a9)), closes [#3360](https://github.com/wangy1931/cloudwiz-web/issues/3360) [#3361](https://github.com/wangy1931/cloudwiz-web/issues/3361)
* **graphs:** zoom out on double click ([690a6e1](https://github.com/wangy1931/cloudwiz-web/commit/690a6e1))
* **grunt:** add autoprefix with postcss ([b912edb](https://github.com/wangy1931/cloudwiz-web/commit/b912edb)), closes [#4250](https://github.com/wangy1931/cloudwiz-web/issues/4250)
* **hooks:** add grunt test to pre commit ([61a655f](https://github.com/wangy1931/cloudwiz-web/commit/61a655f))
* **hooks:** add scripts for symlinking git hooks ([c12aa0e](https://github.com/wangy1931/cloudwiz-web/commit/c12aa0e))
* **hooks:** improve symlinks script ([dfd4fbc](https://github.com/wangy1931/cloudwiz-web/commit/dfd4fbc))
* **imports:** work on datasource dashboards ([87fc836](https://github.com/wangy1931/cloudwiz-web/commit/87fc836))
* **impressionStore:** remove un needed js-ts bridge ([b79217b](https://github.com/wangy1931/cloudwiz-web/commit/b79217b))
* **influxdb:** add default interval setting ([f8b3c0a](https://github.com/wangy1931/cloudwiz-web/commit/f8b3c0a)), closes [#1552](https://github.com/wangy1931/cloudwiz-web/issues/1552)
* **influxdb:** add support for 0.11.0 tags ([b73d196](https://github.com/wangy1931/cloudwiz-web/commit/b73d196)), closes [#4392](https://github.com/wangy1931/cloudwiz-web/issues/4392)
* **influxdb:** bases parsing upon query ([ba48f40](https://github.com/wangy1931/cloudwiz-web/commit/ba48f40))
* **influxdb:** began work on influxdb policy selector ([a8e3f73](https://github.com/wangy1931/cloudwiz-web/commit/a8e3f73))
* **influxdb:** changed multi query encoding in order to support InfluxDB >v0.11, closes [#4533](https://github.com/wangy1931/cloudwiz-web/issues/4533) ([ed62822](https://github.com/wangy1931/cloudwiz-web/commit/ed62822))
* **influxdb:** escape influxdb tag values, fixes [#3950](https://github.com/wangy1931/cloudwiz-web/issues/3950) ([de90ad8](https://github.com/wangy1931/cloudwiz-web/commit/de90ad8))
* **influxdb:** support for policy selection in query editor, closes [#2018](https://github.com/wangy1931/cloudwiz-web/issues/2018) ([510a211](https://github.com/wangy1931/cloudwiz-web/commit/510a211))
* **inspector:** minor fix for inspector making the error not clear when having dashboard refresh, fixes [#3938](https://github.com/wangy1931/cloudwiz-web/issues/3938) ([5588e75](https://github.com/wangy1931/cloudwiz-web/commit/5588e75))
* **live:** panel sdk/api refactorings ([cb49e11](https://github.com/wangy1931/cloudwiz-web/commit/cb49e11))
* **live:** progress on panel <-> data source communication patterns ([8dee54b](https://github.com/wangy1931/cloudwiz-web/commit/8dee54b))
* **live:** tricky ([3ea441d](https://github.com/wangy1931/cloudwiz-web/commit/3ea441d))
* **live:** wip work ([195be27](https://github.com/wangy1931/cloudwiz-web/commit/195be27))
* **live:** work on websocket data source, [#3455](https://github.com/wangy1931/cloudwiz-web/issues/3455) ([2adc4d1](https://github.com/wangy1931/cloudwiz-web/commit/2adc4d1))
* **live datasouces:** moved from Observable to Subject ([1ccde20](https://github.com/wangy1931/cloudwiz-web/commit/1ccde20))
* **login:** minor ux improvements ([0f52b43](https://github.com/wangy1931/cloudwiz-web/commit/0f52b43)), closes [#3698](https://github.com/wangy1931/cloudwiz-web/issues/3698)
* **macaron:** upgrades macaron version ([4fe72eb](https://github.com/wangy1931/cloudwiz-web/commit/4fe72eb))
* **navigation:** hide new and import for viewers ([c09d506](https://github.com/wangy1931/cloudwiz-web/commit/c09d506)), closes [#4326](https://github.com/wangy1931/cloudwiz-web/issues/4326)
* **packaging:** added Restart=on-failure to systemd service spec file ([cdd341a](https://github.com/wangy1931/cloudwiz-web/commit/cdd341a))
* **panel:** added new panel event panel-initialized ([dfe36fb](https://github.com/wangy1931/cloudwiz-web/commit/dfe36fb))
* **panel:** disable span options in fullscreen ([f4908b6](https://github.com/wangy1931/cloudwiz-web/commit/f4908b6)), closes [#4018](https://github.com/wangy1931/cloudwiz-web/issues/4018)
* **panel:** more panel base infrastructure ([a950ff9](https://github.com/wangy1931/cloudwiz-web/commit/a950ff9))
* **panel plugin:** improving panel plugin model ([4f7fb40](https://github.com/wangy1931/cloudwiz-web/commit/4f7fb40))
* **panel-menu:** remove duplicate in fullscreen ([6590e6f](https://github.com/wangy1931/cloudwiz-web/commit/6590e6f)), closes [#4064](https://github.com/wangy1931/cloudwiz-web/issues/4064)
* **panels:** fixed duplicate and remove panel ([f1efce5](https://github.com/wangy1931/cloudwiz-web/commit/f1efce5))
* **panels:** fixed panel time ([3414136](https://github.com/wangy1931/cloudwiz-web/commit/3414136))
* **panels:** fixed singlestat tests ([307c86f](https://github.com/wangy1931/cloudwiz-web/commit/307c86f))
* **panels:** fixed unit tests ([34b82ca](https://github.com/wangy1931/cloudwiz-web/commit/34b82ca))
* **panels:** fixes ([56c76f3](https://github.com/wangy1931/cloudwiz-web/commit/56c76f3))
* **panels:** fixes ([51a32a2](https://github.com/wangy1931/cloudwiz-web/commit/51a32a2))
* **panels:** fixes ([600ffa7](https://github.com/wangy1931/cloudwiz-web/commit/600ffa7))
* **panels:** fixing broken stuff ([f0f7da9](https://github.com/wangy1931/cloudwiz-web/commit/f0f7da9))
* **panels:** graph panel starting to work ([aac190e](https://github.com/wangy1931/cloudwiz-web/commit/aac190e))
* **panels:** MetricsPanelCtrl is starting to work ([b0dd79c](https://github.com/wangy1931/cloudwiz-web/commit/b0dd79c))
* **panels:** minor fix ([cc375f4](https://github.com/wangy1931/cloudwiz-web/commit/cc375f4))
* **panels:** minor fixes ([53dc21c](https://github.com/wangy1931/cloudwiz-web/commit/53dc21c))
* **panels:** minor progress ([c30b1b1](https://github.com/wangy1931/cloudwiz-web/commit/c30b1b1))
* **panels:** more panel refactoring ([4132cf1](https://github.com/wangy1931/cloudwiz-web/commit/4132cf1))
* **panels:** more panel refactoring, using events instead of overriding base class methods ([b3c073a](https://github.com/wangy1931/cloudwiz-web/commit/b3c073a))
* **panels:** panel refactorings ([6a42b95](https://github.com/wangy1931/cloudwiz-web/commit/6a42b95))
* **panels:** progress on new panel infrastructure, base classes ([9c6698e](https://github.com/wangy1931/cloudwiz-web/commit/9c6698e))
* **panels:** updated influxdb editor to use panelCtrl ([05e8c57](https://github.com/wangy1931/cloudwiz-web/commit/05e8c57))
* **panels:** updated text panel to new format ([8f4cf6c](https://github.com/wangy1931/cloudwiz-web/commit/8f4cf6c))
* **panels:** upgraded dashlist panel to new format ([aa251fc](https://github.com/wangy1931/cloudwiz-web/commit/aa251fc))
* **panels:** upgraded table panel to latest plugin model ([9bd3b41](https://github.com/wangy1931/cloudwiz-web/commit/9bd3b41))
* **panels:** upgraded text panel ([73af4df](https://github.com/wangy1931/cloudwiz-web/commit/73af4df))
* **panels:** upgradede singlestat panel ([97ac81a](https://github.com/wangy1931/cloudwiz-web/commit/97ac81a))
* **pinned:** updated ([03aea09](https://github.com/wangy1931/cloudwiz-web/commit/03aea09))
* **pinned sidemenu:** completed side menu pinned stuff ([92c2f8d](https://github.com/wangy1931/cloudwiz-web/commit/92c2f8d))
* **playlist:** add search result count ([aa83dc1](https://github.com/wangy1931/cloudwiz-web/commit/aa83dc1))
* **playlist:** add usage statisics ([52403ca](https://github.com/wangy1931/cloudwiz-web/commit/52403ca))
* **playlist:** basic UI support for tags ([a7de2ce](https://github.com/wangy1931/cloudwiz-web/commit/a7de2ce))
* **playlist:** changes tag result into a list ([31ea5f5](https://github.com/wangy1931/cloudwiz-web/commit/31ea5f5))
* **playlist:** changes to relation table ([8a38991](https://github.com/wangy1931/cloudwiz-web/commit/8a38991))
* **playlist:** clicks outside control stops playlist ([4a54edd](https://github.com/wangy1931/cloudwiz-web/commit/4a54edd)), closes [#3711](https://github.com/wangy1931/cloudwiz-web/issues/3711)
* **playlist:** improve header ([7c48206](https://github.com/wangy1931/cloudwiz-web/commit/7c48206))
* **playlist:** improve the look of tag playlist items ([3ccf7c8](https://github.com/wangy1931/cloudwiz-web/commit/3ccf7c8))
* **playlist:** make default timespan placeholder ([c93a3ce](https://github.com/wangy1931/cloudwiz-web/commit/c93a3ce))
* **playlist:** minor ux changes for playlists ([be1fb13](https://github.com/wangy1931/cloudwiz-web/commit/be1fb13))
* **playlist:** move playlistSrv to playlist folder ([d0bcd1d](https://github.com/wangy1931/cloudwiz-web/commit/d0bcd1d))
* **playlist:** playlistsrv is now started by id ([dca503b](https://github.com/wangy1931/cloudwiz-web/commit/dca503b))
* **playlist:** refactor FE to support playlistitems ([98dccb8](https://github.com/wangy1931/cloudwiz-web/commit/98dccb8))
* **playlist:** reload all dashboards every cycle ([62ae02b](https://github.com/wangy1931/cloudwiz-web/commit/62ae02b)), closes [#3706](https://github.com/wangy1931/cloudwiz-web/issues/3706)
* **playlist:** renames timespan to interval ([e8786b0](https://github.com/wangy1931/cloudwiz-web/commit/e8786b0))
* **playlist:** render playlists if playlist id is invalid ([00dc078](https://github.com/wangy1931/cloudwiz-web/commit/00dc078)), closes [#4209](https://github.com/wangy1931/cloudwiz-web/issues/4209)
* **playlist:** shortens urls ([1ec97e5](https://github.com/wangy1931/cloudwiz-web/commit/1ec97e5))
* **plugin:** experimental work on plugin architecture ([3e3b996](https://github.com/wangy1931/cloudwiz-web/commit/3e3b996))
* **plugin:** more work on plugin schema ([9943b9a](https://github.com/wangy1931/cloudwiz-web/commit/9943b9a))
* **plugin-editors:** more work on plugin editor loading ([12f487e](https://github.com/wangy1931/cloudwiz-web/commit/12f487e))
* **plugin.json:** remove staticRoot field ([e905c2c](https://github.com/wangy1931/cloudwiz-web/commit/e905c2c))
* **pluginlist:** added plugin logo ([d66d25f](https://github.com/wangy1931/cloudwiz-web/commit/d66d25f))
* **pluginlist:** worked on plugin list ([6ce934f](https://github.com/wangy1931/cloudwiz-web/commit/6ce934f))
* **pluginlist panel:** updates to pluginlist panel, hooked up plugin type categories ([97be3c0](https://github.com/wangy1931/cloudwiz-web/commit/97be3c0))
* **plugins:** a lot of work on [#4298](https://github.com/wangy1931/cloudwiz-web/issues/4298) ([dfaa6d8](https://github.com/wangy1931/cloudwiz-web/commit/dfaa6d8))
* **plugins:** added better error message when trying to load data source plugin module that is missing datasource constructor ([15546dd](https://github.com/wangy1931/cloudwiz-web/commit/15546dd))
* **plugins:** added dashboards tab to plugin edit page, [#4275](https://github.com/wangy1931/cloudwiz-web/issues/4275) ([c504abb](https://github.com/wangy1931/cloudwiz-web/commit/c504abb))
* **plugins:** added disable button to app config tab ([05cc370](https://github.com/wangy1931/cloudwiz-web/commit/05cc370))
* **plugins:** added filter (type) tabs po plugin list view ([69c8bb1](https://github.com/wangy1931/cloudwiz-web/commit/69c8bb1))
* **plugins:** added plugin logo to navbar on plugin page, [#4452](https://github.com/wangy1931/cloudwiz-web/issues/4452) ([5dfac9a](https://github.com/wangy1931/cloudwiz-web/commit/5dfac9a))
* **plugins:** added prometheus dashboard to prometheus data source, [#4298](https://github.com/wangy1931/cloudwiz-web/issues/4298) ([d575a5c](https://github.com/wangy1931/cloudwiz-web/commit/d575a5c))
* **plugins:** adds a readme for every native plugin ([45b9097](https://github.com/wangy1931/cloudwiz-web/commit/45b9097))
* **plugins:** adds warn log for scanning folders ([9343b03](https://github.com/wangy1931/cloudwiz-web/commit/9343b03))
* **plugins:** annotations view work again for elasticsearch ([7ae81a2](https://github.com/wangy1931/cloudwiz-web/commit/7ae81a2))
* **plugins:** base clases are now in app/plugins/sdk ([8011295](https://github.com/wangy1931/cloudwiz-web/commit/8011295))
* **plugins:** began refactoring AppSettings -> PluginSettings, and have the plugins list view and plugin edit view be common for all plugins ([8db7cf4](https://github.com/wangy1931/cloudwiz-web/commit/8db7cf4))
* **plugins:** better logging and handling of loading plugins, try to create plugins dir if it does not exist, fixes [#3974](https://github.com/wangy1931/cloudwiz-web/issues/3974) ([257b824](https://github.com/wangy1931/cloudwiz-web/commit/257b824))
* **plugins:** changed plugin schema, pluginType -> type, type -> id ([3bb20db](https://github.com/wangy1931/cloudwiz-web/commit/3bb20db))
* **plugins:** changed so that plugins can load css async via util function exposed from app/plugins/sdk ([ae39ec8](https://github.com/wangy1931/cloudwiz-web/commit/ae39ec8))
* **plugins:** changed what datasources should return, they should now return the datasource constructor ([c5635f9](https://github.com/wangy1931/cloudwiz-web/commit/c5635f9))
* **plugins:** commented out dashboard import list ([091726b](https://github.com/wangy1931/cloudwiz-web/commit/091726b))
* **plugins:** completed upgrade of all built in panels ([b5726a8](https://github.com/wangy1931/cloudwiz-web/commit/b5726a8))
* **plugins:** converted graphite plugin to new format ([f813b4c](https://github.com/wangy1931/cloudwiz-web/commit/f813b4c))
* **plugins:** dashboard import for data sources is working! [#4298](https://github.com/wangy1931/cloudwiz-web/issues/4298) ([0398fac](https://github.com/wangy1931/cloudwiz-web/commit/0398fac))
* **plugins:** extracted first plugin row to its own component ([f270082](https://github.com/wangy1931/cloudwiz-web/commit/f270082))
* **plugins:** finished app navigation enhancements, closes [#4434](https://github.com/wangy1931/cloudwiz-web/issues/4434) ([10df9dc](https://github.com/wangy1931/cloudwiz-web/commit/10df9dc))
* **plugins:** fix for  plugin logo to navbar on plugin page, [#4452](https://github.com/wangy1931/cloudwiz-web/issues/4452) ([35c853e](https://github.com/wangy1931/cloudwiz-web/commit/35c853e))
* **plugins:** fixed cloudwatch query editor ([6886faa](https://github.com/wangy1931/cloudwiz-web/commit/6886faa))
* **plugins:** fixed failing api test ([bd2e1ef](https://github.com/wangy1931/cloudwiz-web/commit/bd2e1ef))
* **plugins:** good progress on converting query editors, graphite's query ctrl is now working as is unit tests ([356f7b9](https://github.com/wangy1931/cloudwiz-web/commit/356f7b9))
* **plugins:** import all dashboards feature ([61017fc](https://github.com/wangy1931/cloudwiz-web/commit/61017fc))
* **plugins:** last refactoring of how panels are implemented, now the same way as plugin editors ([2a8b96b](https://github.com/wangy1931/cloudwiz-web/commit/2a8b96b))
* **plugins:** made data source custom edit view into a directive instead of html path config in plugin.json ([cf98a16](https://github.com/wangy1931/cloudwiz-web/commit/cf98a16))
* **plugins:** made it possible to have relative plugin template urls ([8784be9](https://github.com/wangy1931/cloudwiz-web/commit/8784be9))
* **plugins:** made panels loaded via plugin-componet directive ([14cc771](https://github.com/wangy1931/cloudwiz-web/commit/14cc771))
* **plugins:** major improvement in plugins golang code ([1ffcea1](https://github.com/wangy1931/cloudwiz-web/commit/1ffcea1))
* **plugins:** migrated cloudwatch and fixed a bunch of issues with data source edit views ([2fc8da7](https://github.com/wangy1931/cloudwiz-web/commit/2fc8da7))
* **plugins:** migrated elasticsearch to new plugin editor model, also minor fixes ([0bea6ab](https://github.com/wangy1931/cloudwiz-web/commit/0bea6ab))
* **plugins:** migrated influxdb query editor to new plugin model ([eecf844](https://github.com/wangy1931/cloudwiz-web/commit/eecf844))
* **plugins:** migrated opentsdb plugin ([0da733d](https://github.com/wangy1931/cloudwiz-web/commit/0da733d))
* **plugins:** migrating graphite query editor to new model ([822c8f1](https://github.com/wangy1931/cloudwiz-web/commit/822c8f1))
* **plugins:** minor fix for external plugins with staticRoot ([ab79348](https://github.com/wangy1931/cloudwiz-web/commit/ab79348))
* **plugins:** minor fixes to breaking out query editor row into reusable component ([fc829b3](https://github.com/wangy1931/cloudwiz-web/commit/fc829b3))
* **plugins:** minor progress on dashboard imports ([78b9c30](https://github.com/wangy1931/cloudwiz-web/commit/78b9c30))
* **plugins:** more progress on plugin editors ([21f6c07](https://github.com/wangy1931/cloudwiz-web/commit/21f6c07))
* **plugins:** more refactoring ([d83e245](https://github.com/wangy1931/cloudwiz-web/commit/d83e245))
* **plugins:** more upgrading work ([36ebfc7](https://github.com/wangy1931/cloudwiz-web/commit/36ebfc7))
* **plugins:** more work on how plugins expose directives ([6c6c3a5](https://github.com/wangy1931/cloudwiz-web/commit/6c6c3a5))
* **plugins:** more work on plugin dashboard install, [#4298](https://github.com/wangy1931/cloudwiz-web/issues/4298) ([fc54c01](https://github.com/wangy1931/cloudwiz-web/commit/fc54c01))
* **plugins:** more work on plugin directives and isolation ([0583ec0](https://github.com/wangy1931/cloudwiz-web/commit/0583ec0))
* **plugins:** more work on plugin editors,prometheus query editor is working ([efdd4a6](https://github.com/wangy1931/cloudwiz-web/commit/efdd4a6))
* **plugins:** more work on plugins list/edit view ([c521182](https://github.com/wangy1931/cloudwiz-web/commit/c521182))
* **plugins:** more work on refining datasource editors ([eaaf924](https://github.com/wangy1931/cloudwiz-web/commit/eaaf924))
* **plugins:** mounts dist folder if exists in plugin ([eb79436](https://github.com/wangy1931/cloudwiz-web/commit/eb79436)), closes [#4230](https://github.com/wangy1931/cloudwiz-web/issues/4230)
* **plugins:** moved annotation editor to new plugin component loader ([05dfccb](https://github.com/wangy1931/cloudwiz-web/commit/05dfccb))
* **plugins:** moved http settings to directive instad of just ng-include partial ([ca3405a](https://github.com/wangy1931/cloudwiz-web/commit/ca3405a))
* **plugins:** now solved all cases of loading plugin directives, now just have to upgrade all panels and data sources ([c4ce329](https://github.com/wangy1931/cloudwiz-web/commit/c4ce329))
* **plugins:** polish to plugin page, better handling for reading readme file contents ([581ffb8](https://github.com/wangy1931/cloudwiz-web/commit/581ffb8))
* **plugins:** progress on dashboard installs , [#4298](https://github.com/wangy1931/cloudwiz-web/issues/4298) ([2de439b](https://github.com/wangy1931/cloudwiz-web/commit/2de439b))
* **plugins:** progress on plugin details page, # 4275 ([1356790](https://github.com/wangy1931/cloudwiz-web/commit/1356790))
* **plugins:** progress on plugin details page, # 4275 ([b8fb8cd](https://github.com/wangy1931/cloudwiz-web/commit/b8fb8cd))
* **plugins:** progress on plugins page ([db98632](https://github.com/wangy1931/cloudwiz-web/commit/db98632))
* **plugins:** progress on plugins page ([c148d89](https://github.com/wangy1931/cloudwiz-web/commit/c148d89))
* **plugins:** refactored datasourceEditCtrl to typescript, [#4298](https://github.com/wangy1931/cloudwiz-web/issues/4298) ([1951f38](https://github.com/wangy1931/cloudwiz-web/commit/1951f38))
* **plugins:** remove app bundled plugins from plugins list ([f80c240](https://github.com/wangy1931/cloudwiz-web/commit/f80c240))
* **plugins:** removed external plugins and bundle code, not ready for master yet, will revert this commit in seperate branch ([5eab5dc](https://github.com/wangy1931/cloudwiz-web/commit/5eab5dc))
* **plugins:** restored config view functionality to plugin page ([d55dc92](https://github.com/wangy1931/cloudwiz-web/commit/d55dc92))
* **plugins:** updated changelog with notice about plugin api changes ([b4d595e](https://github.com/wangy1931/cloudwiz-web/commit/b4d595e))
* **plugins:** updated cloudwatch to new plugin style ([8699d49](https://github.com/wangy1931/cloudwiz-web/commit/8699d49))
* **plugins:** upgraded Cloudwatch to new plugin schema ([bc328cb](https://github.com/wangy1931/cloudwiz-web/commit/bc328cb))
* **plugins:** upgraded influxdb to new data source plugin model ([b76449d](https://github.com/wangy1931/cloudwiz-web/commit/b76449d))
* **plugins:** upgraded influxdb to new plugin format ([6fae264](https://github.com/wangy1931/cloudwiz-web/commit/6fae264))
* **plugins:** upgraded opentsdb ([35f40b7](https://github.com/wangy1931/cloudwiz-web/commit/35f40b7))
* **plugins:** upgraded opentsdb and prometheus to new plugin module return format ([a233570](https://github.com/wangy1931/cloudwiz-web/commit/a233570))
* **plugins:** upgraded singlestat to new plugin format ([1d9ad9b](https://github.com/wangy1931/cloudwiz-web/commit/1d9ad9b))
* **plugins:** various fixes entering edit mode after adding a new panel ([908765e](https://github.com/wangy1931/cloudwiz-web/commit/908765e))
* **plugins:** WIP on new apps concept ([eacc46d](https://github.com/wangy1931/cloudwiz-web/commit/eacc46d))
* **plugins:** work on plugin directive loading ([dbafc8c](https://github.com/wangy1931/cloudwiz-web/commit/dbafc8c))
* **plugins:** work on plugin directives loading ([d420cb3](https://github.com/wangy1931/cloudwiz-web/commit/d420cb3))
* **plugins:** work on plugins that include dashboards ([3191678](https://github.com/wangy1931/cloudwiz-web/commit/3191678))
* **plugins:** worked on markdown support for plugin page, [#4275](https://github.com/wangy1931/cloudwiz-web/issues/4275) ([4cd4ce5](https://github.com/wangy1931/cloudwiz-web/commit/4cd4ce5))
* **plugins:** worked on plugin dashboard import handling ([60adced](https://github.com/wangy1931/cloudwiz-web/commit/60adced))
* **plugins:** working on plugin examples ([5b9ed82](https://github.com/wangy1931/cloudwiz-web/commit/5b9ed82))
* **plugins:** working on plugin examples ([82d5d1b](https://github.com/wangy1931/cloudwiz-web/commit/82d5d1b))
* **pluginslist:** minor update ([451a8be](https://github.com/wangy1931/cloudwiz-web/commit/451a8be))
* **preferences:** got timezone option to work on org and profile level, as well as dashboard ([b30b78e](https://github.com/wangy1931/cloudwiz-web/commit/b30b78e))
* **preferences:** lots of refactoring and changes to [#3214](https://github.com/wangy1931/cloudwiz-web/issues/3214) ([a88176e](https://github.com/wangy1931/cloudwiz-web/commit/a88176e))
* **preferences:** refactoring PR [#4399](https://github.com/wangy1931/cloudwiz-web/issues/4399) ([7023ded](https://github.com/wangy1931/cloudwiz-web/commit/7023ded))
* **preferences:** removed unused api prefernce methods, these need to be abstracted more from an http api perpsective, they are too low level for the http api, [#4399](https://github.com/wangy1931/cloudwiz-web/issues/4399) ([5e43114](https://github.com/wangy1931/cloudwiz-web/commit/5e43114))
* **preferences:** still a lot more work needed in prefernces branch ([4a807b6](https://github.com/wangy1931/cloudwiz-web/commit/4a807b6))
* **preferences:** theme and home dashbord settings now work work on profile and org settings page ([ab1048b](https://github.com/wangy1931/cloudwiz-web/commit/ab1048b))
* **prefs:** moved context srv to typescript ([55d95f9](https://github.com/wangy1931/cloudwiz-web/commit/55d95f9))
* **prometheus:** added special regex escape for prometheus, fixes [#4234](https://github.com/wangy1931/cloudwiz-web/issues/4234) ([8ed8bfb](https://github.com/wangy1931/cloudwiz-web/commit/8ed8bfb))
* **query editors:** changed chevron position ([f1d4fd3](https://github.com/wangy1931/cloudwiz-web/commit/f1d4fd3))
* **query editors:** converted OpenTSDB editor to new form styles ([7b560f9](https://github.com/wangy1931/cloudwiz-web/commit/7b560f9))
* **query editors:** minor progress ([5e6485c](https://github.com/wangy1931/cloudwiz-web/commit/5e6485c))
* **query editors:** more progress on ES query editor ([4515e66](https://github.com/wangy1931/cloudwiz-web/commit/4515e66))
* **query editors:** more work on query editors make over ([805fd18](https://github.com/wangy1931/cloudwiz-web/commit/805fd18))
* **query editors:** progress on query editors ([bca0894](https://github.com/wangy1931/cloudwiz-web/commit/bca0894))
* **query editors:** remember collapsed state ([6b813b4](https://github.com/wangy1931/cloudwiz-web/commit/6b813b4))
* **query editors:** updated cloudwatch to new form styles ([0ebd921](https://github.com/wangy1931/cloudwiz-web/commit/0ebd921))
* **query editors:** updated prometheus editor ([206cb51](https://github.com/wangy1931/cloudwiz-web/commit/206cb51))
* **query_editors:** more work ([0e4b70a](https://github.com/wangy1931/cloudwiz-web/commit/0e4b70a))
* **renderer:** add timeout for the renderer api ([43073da](https://github.com/wangy1931/cloudwiz-web/commit/43073da)), closes [#4325](https://github.com/wangy1931/cloudwiz-web/issues/4325)
* **sidemenu:** added handling of click outside to hide sidemenu, also refactored grafana_ctrl to a more general grafana component ([c201f4c](https://github.com/wangy1931/cloudwiz-web/commit/c201f4c))
* **sidemenu:** improved user dropdown and sidemenu, will be improved further, [#3687](https://github.com/wangy1931/cloudwiz-web/issues/3687) ([6c1fee7](https://github.com/wangy1931/cloudwiz-web/commit/6c1fee7))
* **sidemenu:** pinned state ([5f2aba6](https://github.com/wangy1931/cloudwiz-web/commit/5f2aba6))
* **sidemenu:** pinned work started ([b5ef793](https://github.com/wangy1931/cloudwiz-web/commit/b5ef793))
* **sidenav:** more polish to new sidenamv ([842a595](https://github.com/wangy1931/cloudwiz-web/commit/842a595))
* **sidenav:** more work on new side nav ([dfcb82d](https://github.com/wangy1931/cloudwiz-web/commit/dfcb82d))
* **singlestat:** make sparkline height dynamic ([5de69b2](https://github.com/wangy1931/cloudwiz-web/commit/5de69b2)), closes [#3553](https://github.com/wangy1931/cloudwiz-web/issues/3553)
* **singlestat:** reduce max thresholds to two. ([cd1b2e2](https://github.com/wangy1931/cloudwiz-web/commit/cd1b2e2)), closes [#3248](https://github.com/wangy1931/cloudwiz-web/issues/3248)
* **table:** escape html by default ([d750908](https://github.com/wangy1931/cloudwiz-web/commit/d750908)), closes [#3673](https://github.com/wangy1931/cloudwiz-web/issues/3673)
* **table:** remove option to disable html encoding ([5775c0a](https://github.com/wangy1931/cloudwiz-web/commit/5775c0a))
* **table:** uses lodash to escape html ([e7ff018](https://github.com/wangy1931/cloudwiz-web/commit/e7ff018))
* **tech:** force create symlinks ([36e99ac](https://github.com/wangy1931/cloudwiz-web/commit/36e99ac))
* **templates:** collapse submenu if none visable templates ([4299fee](https://github.com/wangy1931/cloudwiz-web/commit/4299fee))
* **templating:** changed how the All templating value works ([fa73b1c](https://github.com/wangy1931/cloudwiz-web/commit/fa73b1c))
* **templating:** completed work on templating as data source, closes [#816](https://github.com/wangy1931/cloudwiz-web/issues/816) ([8b4c7c9](https://github.com/wangy1931/cloudwiz-web/commit/8b4c7c9))
* fixed share modal ([3c3d3c9](https://github.com/wangy1931/cloudwiz-web/commit/3c3d3c9))
* panel refactoring ([3e14f8a](https://github.com/wangy1931/cloudwiz-web/commit/3e14f8a))
* **updates:** changed to new api ([3849b59](https://github.com/wangy1931/cloudwiz-web/commit/3849b59))
* plugin list panel ([d70ef90](https://github.com/wangy1931/cloudwiz-web/commit/d70ef90))
* query editors, started work on updated ES query editor ([a1faaa1](https://github.com/wangy1931/cloudwiz-web/commit/a1faaa1))
* removed unused routes and minor fixes ([99a053b](https://github.com/wangy1931/cloudwiz-web/commit/99a053b))
* update checks starting to work ([6ac3bd4](https://github.com/wangy1931/cloudwiz-web/commit/6ac3bd4))
* **templating:** fixed failing unit tests in PR [#4287](https://github.com/wangy1931/cloudwiz-web/issues/4287) ([6fac471](https://github.com/wangy1931/cloudwiz-web/commit/6fac471))
* **templating:** fixes for influxdb template variable formating, [#2918](https://github.com/wangy1931/cloudwiz-web/issues/2918) ([56bef63](https://github.com/wangy1931/cloudwiz-web/commit/56bef63))
* **templating:** initial work on rethink of value formating ([4ef79d2](https://github.com/wangy1931/cloudwiz-web/commit/4ef79d2))
* **templating:** lots of progress on template variable context specific formats, [#2918](https://github.com/wangy1931/cloudwiz-web/issues/2918), all elasticsearch / lucene use cases seem to work now ([f3ad71d](https://github.com/wangy1931/cloudwiz-web/commit/f3ad71d))
* **templating:** minor sort fix ([89ea25c](https://github.com/wangy1931/cloudwiz-web/commit/89ea25c))
* **templating:** more work on context specific varaiable formats, [#2918](https://github.com/wangy1931/cloudwiz-web/issues/2918) ([8f5a7f1](https://github.com/wangy1931/cloudwiz-web/commit/8f5a7f1))
* **templating:** moved template interpolation into query building ([23a136d](https://github.com/wangy1931/cloudwiz-web/commit/23a136d))
* **templating:** polished variable template edit forms, added new template variable type: datasource ([1cce5fd](https://github.com/wangy1931/cloudwiz-web/commit/1cce5fd))
* **templating:** progress on templating rethink ([cb8b038](https://github.com/wangy1931/cloudwiz-web/commit/cb8b038))
* **templating:** prometheus now works with new template variable formating/escaping, [#2918](https://github.com/wangy1931/cloudwiz-web/issues/2918) ([d1bac6c](https://github.com/wangy1931/cloudwiz-web/commit/d1bac6c))
* **templating:** refactoring of the refresh values of [#4281](https://github.com/wangy1931/cloudwiz-web/issues/4281) ([4a5b753](https://github.com/wangy1931/cloudwiz-web/commit/4a5b753))
* **templating:** simplified templating forms removed all formats ([078e69d](https://github.com/wangy1931/cloudwiz-web/commit/078e69d))
* **templating:** templated ds progress ([13471ae](https://github.com/wangy1931/cloudwiz-web/commit/13471ae))
* **templating:** updates to template variable forms ([57315f1](https://github.com/wangy1931/cloudwiz-web/commit/57315f1))
* **text and css:** html partials and css can be loaded via systemjs ([dfe0e25](https://github.com/wangy1931/cloudwiz-web/commit/dfe0e25))
* **timepicker:** added validation to timepicker, and validation state to apply button, fixes [#3870](https://github.com/wangy1931/cloudwiz-web/issues/3870) ([fa63d26](https://github.com/wangy1931/cloudwiz-web/commit/fa63d26))
* **timepicker:** adds arrows to move back and forth in current dashboard ([7d09579](https://github.com/wangy1931/cloudwiz-web/commit/7d09579)), closes [#119](https://github.com/wangy1931/cloudwiz-web/issues/119)
* **top_nav:** option to make dashboards editable again ([9ece45c](https://github.com/wangy1931/cloudwiz-web/commit/9ece45c)), closes [#2587](https://github.com/wangy1931/cloudwiz-web/issues/2587) [#2554](https://github.com/wangy1931/cloudwiz-web/issues/2554)
* **tslint:** added more tslint rules ([59c928a](https://github.com/wangy1931/cloudwiz-web/commit/59c928a))
* **tslint:** more tslint work ([08caf4b](https://github.com/wangy1931/cloudwiz-web/commit/08caf4b))
* **tslint:** remove two space requirements for comments ([48a721e](https://github.com/wangy1931/cloudwiz-web/commit/48a721e))
* **units:** add more data rate options ([899a44a](https://github.com/wangy1931/cloudwiz-web/commit/899a44a))
* **units:** add more data rate units ([a35bf49](https://github.com/wangy1931/cloudwiz-web/commit/a35bf49)), closes [#3759](https://github.com/wangy1931/cloudwiz-web/issues/3759)
* **update checks:** started work on update checks ([b4a8c22](https://github.com/wangy1931/cloudwiz-web/commit/b4a8c22))
* **ux:** minor tweaks and fixes, added hover submenu dropdowns ([6cdc1e4](https://github.com/wangy1931/cloudwiz-web/commit/6cdc1e4))
* **websocket:** more work websocket ds, # 4355 ([3d5251d](https://github.com/wangy1931/cloudwiz-web/commit/3d5251d))
* **websocket:** reconnection and resubscription handling, [#4355](https://github.com/wangy1931/cloudwiz-web/issues/4355) ([92f20b9](https://github.com/wangy1931/cloudwiz-web/commit/92f20b9))
* **websockets:** inital work on websockets, [#4355](https://github.com/wangy1931/cloudwiz-web/issues/4355) ([fbd94fc](https://github.com/wangy1931/cloudwiz-web/commit/fbd94fc))



<a name="2.6.0"></a>
# [2.6.0](https://github.com/wangy1931/cloudwiz-web/compare/v2.6.0-beta1...v2.6.0) (2015-12-14)


### Bug Fixes

* **admin settings view:** always censor provider_config for system info view, fixes [#3268](https://github.com/wangy1931/cloudwiz-web/issues/3268) ([f0087c9](https://github.com/wangy1931/cloudwiz-web/commit/f0087c9))
* **build:** fixed build after change that made panels into proper plugins ([bd8f5e9](https://github.com/wangy1931/cloudwiz-web/commit/bd8f5e9))
* **build:** fixed build issues with concat not including require_config ([8eb3e48](https://github.com/wangy1931/cloudwiz-web/commit/8eb3e48))
* **changelog:** add info about merged PR's ([8910351](https://github.com/wangy1931/cloudwiz-web/commit/8910351))
* **docs:** fixed typo in installing docs fixes [#3379](https://github.com/wangy1931/cloudwiz-web/issues/3379) ([4cc61d1](https://github.com/wangy1931/cloudwiz-web/commit/4cc61d1))
* **docs:** minor docs fix ([a71b681](https://github.com/wangy1931/cloudwiz-web/commit/a71b681))
* **docs:** minor fix to http docs, fixes [#3301](https://github.com/wangy1931/cloudwiz-web/issues/3301) ([4a3f50c](https://github.com/wangy1931/cloudwiz-web/commit/4a3f50c))
* **elasticsearch:** fixed elasticsearch issue, ghost docs series, fixes [#3223](https://github.com/wangy1931/cloudwiz-web/issues/3223) ([2cbc62d](https://github.com/wangy1931/cloudwiz-web/commit/2cbc62d))
* **elasticsearch:** fixed issue with default state of elasticsearch query, result in error before query controller could set defaults, moved defaults to query builder, also removed raw query mode as it is pretty broken, fixes [#3396](https://github.com/wangy1931/cloudwiz-web/issues/3396) ([419251e](https://github.com/wangy1931/cloudwiz-web/commit/419251e))
* **elasticsearch:** fixed issue with disabling (hiding) query, fixes [#3300](https://github.com/wangy1931/cloudwiz-web/issues/3300) ([9d1906d](https://github.com/wangy1931/cloudwiz-web/commit/9d1906d))
* **elasticsearch:** made interval template variable appear in group by time interval dropdown, fixes [#3241](https://github.com/wangy1931/cloudwiz-web/issues/3241) ([a1afd23](https://github.com/wangy1931/cloudwiz-web/commit/a1afd23))
* **elasticsearch:** minor markup fix ([7e9963a](https://github.com/wangy1931/cloudwiz-web/commit/7e9963a))
* **elasticsearch:** refactoring of [#3321](https://github.com/wangy1931/cloudwiz-web/issues/3321) ([db9c288](https://github.com/wangy1931/cloudwiz-web/commit/db9c288))
* **graph:** removed experimental mockup code that was accidently merged master ([0339a5a](https://github.com/wangy1931/cloudwiz-web/commit/0339a5a))
* **graph legend:** fixed issue with escaping html text in graph legend, and in function param, fixes [#3482](https://github.com/wangy1931/cloudwiz-web/issues/3482) ([77c510c](https://github.com/wangy1931/cloudwiz-web/commit/77c510c))
* **graph panel:** minor spelling change ([2436cda](https://github.com/wangy1931/cloudwiz-web/commit/2436cda))
* **html:** removed unneeded tag ([ce58486](https://github.com/wangy1931/cloudwiz-web/commit/ce58486))
* **http api:** correct return status code for /api/datasources/:id so it eturns 404 when not found, fixes [#3217](https://github.com/wangy1931/cloudwiz-web/issues/3217) ([32f9f8f](https://github.com/wangy1931/cloudwiz-web/commit/32f9f8f))
* **influxdb:** fixed issue where Group By label was only showed on first query, fixes [#3453](https://github.com/wangy1931/cloudwiz-web/issues/3453) ([45c69fa](https://github.com/wangy1931/cloudwiz-web/commit/45c69fa))
* **influxdb:** fixed issue with metric segment component that caused double events ([aa13a80](https://github.com/wangy1931/cloudwiz-web/commit/aa13a80))
* **influxdb:** minor fix to new editor, there were 5min as a selectable option in derivative function ([023fa2b](https://github.com/wangy1931/cloudwiz-web/commit/023fa2b))
* **inspector:** added close button to inspector modal, fixes [#3213](https://github.com/wangy1931/cloudwiz-web/issues/3213) ([e420844](https://github.com/wangy1931/cloudwiz-web/commit/e420844))
* **invite:** removed resend invite button, button logic was not implemented, fixes [#3484](https://github.com/wangy1931/cloudwiz-web/issues/3484) ([5227dc6](https://github.com/wangy1931/cloudwiz-web/commit/5227dc6))
* **log:** removed logging accidentlally checked in ([93f3e30](https://github.com/wangy1931/cloudwiz-web/commit/93f3e30))
* **metric_editors:** Fixes clicking timing issue for typeahead auto dropdown option, fixes [#3428](https://github.com/wangy1931/cloudwiz-web/issues/3428) ([4c5cfd5](https://github.com/wangy1931/cloudwiz-web/commit/4c5cfd5))
* **missing files:** added missing files, oops ([24b9bc1](https://github.com/wangy1931/cloudwiz-web/commit/24b9bc1))
* **panel:** removed accidentally commited test markup ([bffb217](https://github.com/wangy1931/cloudwiz-web/commit/bffb217))
* **postgres:** fixes db migration issue with_credentials column for postgres, fixes [#3505](https://github.com/wangy1931/cloudwiz-web/issues/3505) ([c7e3ed0](https://github.com/wangy1931/cloudwiz-web/commit/c7e3ed0))
* **readme:** minor readme update ([3668cb6](https://github.com/wangy1931/cloudwiz-web/commit/3668cb6))
* **security:** do not print ENV config values when they are passwords, fixes [#3337](https://github.com/wangy1931/cloudwiz-web/issues/3337) ([67dc761](https://github.com/wangy1931/cloudwiz-web/commit/67dc761))
* **table:** fixed table height alignment ([85382dc](https://github.com/wangy1931/cloudwiz-web/commit/85382dc))
* **table:** minor fix for table panel ([36ab8ae](https://github.com/wangy1931/cloudwiz-web/commit/36ab8ae))
* **table:** minor fix to table panel and transform time series to aggregations ([002455d](https://github.com/wangy1931/cloudwiz-web/commit/002455d))
* **tablepanel:** fixed width fix for page2+, [#3219](https://github.com/wangy1931/cloudwiz-web/issues/3219) ([850ad1c](https://github.com/wangy1931/cloudwiz-web/commit/850ad1c))
* **templating:** minor fix to default property name, fixes [#3378](https://github.com/wangy1931/cloudwiz-web/issues/3378) ([8e0bba4](https://github.com/wangy1931/cloudwiz-web/commit/8e0bba4))
* **templating:** very minor markup/css change ([57a3182](https://github.com/wangy1931/cloudwiz-web/commit/57a3182))
* **tests:** removed it.only accidentally cecked in ([396f53d](https://github.com/wangy1931/cloudwiz-web/commit/396f53d))
* **timepicker:** changed name of Day so far -> Today so far, Week to date > Week so far, closes [#3465](https://github.com/wangy1931/cloudwiz-web/issues/3465) ([64138bd](https://github.com/wangy1931/cloudwiz-web/commit/64138bd))
* **timepicker:** mini change, removed unneeded space ([1b42e30](https://github.com/wangy1931/cloudwiz-web/commit/1b42e30))
* **timerange:** fix handling of invalid dates in from/to url parameters, fixes [#3345](https://github.com/wangy1931/cloudwiz-web/issues/3345) ([0b4552a](https://github.com/wangy1931/cloudwiz-web/commit/0b4552a))
* **timerange:** fixed broken unit tests ([aa4ac9f](https://github.com/wangy1931/cloudwiz-web/commit/aa4ac9f))
* **timpicker:** another name change to make quick ranges nameing more consistent, fixes [#3465](https://github.com/wangy1931/cloudwiz-web/issues/3465) ([6ea00a4](https://github.com/wangy1931/cloudwiz-web/commit/6ea00a4))


### Features

* **build:** fixed build issues ([f1caae1](https://github.com/wangy1931/cloudwiz-web/commit/f1caae1))
* **changelog:** add info about merge PR to changelog ([67737b1](https://github.com/wangy1931/cloudwiz-web/commit/67737b1))
* **changelog:** adds info about merge PR ([f4fd3f4](https://github.com/wangy1931/cloudwiz-web/commit/f4fd3f4))
* **dasbboard:** fix to issues when setting fullscreen/edit state for panel that have yet to get a scope ([e04678f](https://github.com/wangy1931/cloudwiz-web/commit/e04678f))
* **dashboard:** Automatically go into panel edit mode after adding a new panel to the dashboard ([bbdf75b](https://github.com/wangy1931/cloudwiz-web/commit/bbdf75b))
* **elasticsearch:** a lot of work to support aggregation queries without date_histogram, queries that return metric aggregations now work with the table panel (json data type), [#3219](https://github.com/wangy1931/cloudwiz-web/issues/3219) ([4751e4b](https://github.com/wangy1931/cloudwiz-web/commit/4751e4b))
* **elasticsearch:** add pipeline settings ([85094fc](https://github.com/wangy1931/cloudwiz-web/commit/85094fc))
* **elasticsearch:** add support for model setting ([4fa9219](https://github.com/wangy1931/cloudwiz-web/commit/4fa9219))
* **elasticsearch:** added caret arrow for metric / group by collapse/expand options ([730d485](https://github.com/wangy1931/cloudwiz-web/commit/730d485))
* **elasticsearch:** added min_doc_count option for date histogram, closes [#3416](https://github.com/wangy1931/cloudwiz-web/issues/3416) ([2345b41](https://github.com/wangy1931/cloudwiz-web/commit/2345b41))
* **elasticsearch:** added pipeline aggregations feature to changelog ([82cbfc9](https://github.com/wangy1931/cloudwiz-web/commit/82cbfc9))
* **elasticsearch:** added pipleline aggregation derivative ([b36f644](https://github.com/wangy1931/cloudwiz-web/commit/b36f644))
* **elasticsearch:** adds last class for derivatives ([662430d](https://github.com/wangy1931/cloudwiz-web/commit/662430d))
* **elasticsearch:** adds support for inline script and missing options to all elasticsearch metrics, closes [#3500](https://github.com/wangy1931/cloudwiz-web/issues/3500) ([10f66fa](https://github.com/wangy1931/cloudwiz-web/commit/10f66fa))
* **elasticsearch:** completed initial implementation of moving average and derivative pipleline aggregations, closes [#3451](https://github.com/wangy1931/cloudwiz-web/issues/3451) ([9f294e3](https://github.com/wangy1931/cloudwiz-web/commit/9f294e3))
* **elasticsearch:** display more info in options ([141f22b](https://github.com/wangy1931/cloudwiz-web/commit/141f22b))
* **elasticsearch:** improve pipeline aggs structure ([c8c9e0a](https://github.com/wangy1931/cloudwiz-web/commit/c8c9e0a))
* **elasticsearch:** make series naming generic for pipeline aggs ([139b19f](https://github.com/wangy1931/cloudwiz-web/commit/139b19f))
* **elasticsearch:** metric options alignement ([1bb0530](https://github.com/wangy1931/cloudwiz-web/commit/1bb0530))
* **elasticsearch:** only show pipeline agg for es version >= 2 ([f5eb54e](https://github.com/wangy1931/cloudwiz-web/commit/f5eb54e))
* **elasticsearch:** remove pipeline aggs as possible sources ([6e50e24](https://github.com/wangy1931/cloudwiz-web/commit/6e50e24))
* **elasticsearch:** update pipeline aggs if type change ([0f65cb2](https://github.com/wangy1931/cloudwiz-web/commit/0f65cb2))
* **external plugins:** worked on supporting external plugins better ([69daede](https://github.com/wangy1931/cloudwiz-web/commit/69daede))
* **external_plugin:** lots of refactoring for side menu link extensions and view data, [#3185](https://github.com/wangy1931/cloudwiz-web/issues/3185) ([df0bc7b](https://github.com/wangy1931/cloudwiz-web/commit/df0bc7b))
* **graph panel:** refactoring of hide zero option, [#3336](https://github.com/wangy1931/cloudwiz-web/issues/3336) ([82d8e3c](https://github.com/wangy1931/cloudwiz-web/commit/82d8e3c))
* **grunt watch:** optimized grunt watch, now only operates on changed files ([e194461](https://github.com/wangy1931/cloudwiz-web/commit/e194461))
* **influxdb:** added all functions ([98f7feb](https://github.com/wangy1931/cloudwiz-web/commit/98f7feb))
* **influxdb:** minor fixes to new editor ([b3d494d](https://github.com/wangy1931/cloudwiz-web/commit/b3d494d))
* **influxdb:** minor progress on [#2802](https://github.com/wangy1931/cloudwiz-web/issues/2802) ([ef2094f](https://github.com/wangy1931/cloudwiz-web/commit/ef2094f))
* **influxdb:** minor progress on new editor ([9b41505](https://github.com/wangy1931/cloudwiz-web/commit/9b41505))
* **influxdb:** more work on influxdb editor ([c9ba856](https://github.com/wangy1931/cloudwiz-web/commit/c9ba856))
* **influxdb:** more work on query editor ([5ba1914](https://github.com/wangy1931/cloudwiz-web/commit/5ba1914))
* **influxdb:** more work onnew influxdb editor ([31e2a8b](https://github.com/wangy1931/cloudwiz-web/commit/31e2a8b))
* **influxdb:** moved query builder tests ([4f04eae](https://github.com/wangy1931/cloudwiz-web/commit/4f04eae))
* **influxdb:** new editor now supports field and tag lookup again ([721b37a](https://github.com/wangy1931/cloudwiz-web/commit/721b37a))
* **influxdb:** progress with new influxdb editor ([72d9fcd](https://github.com/wangy1931/cloudwiz-web/commit/72d9fcd))
* **influxdb:** query editor is starting to work, can now add group by parts ([f00320c](https://github.com/wangy1931/cloudwiz-web/commit/f00320c))
* **influxdb:** support for table queries, closes [#3409](https://github.com/wangy1931/cloudwiz-web/issues/3409), [#3219](https://github.com/wangy1931/cloudwiz-web/issues/3219) ([cf1f43d](https://github.com/wangy1931/cloudwiz-web/commit/cf1f43d))
* **influxdb:** worked on schema upgrade for new influx query editor ([5a2b9b1](https://github.com/wangy1931/cloudwiz-web/commit/5a2b9b1))
* **influxdb editor:** lots of work on new editor, [#2856](https://github.com/wangy1931/cloudwiz-web/issues/2856) ([8305235](https://github.com/wangy1931/cloudwiz-web/commit/8305235))
* **influxdb editor:** more progress ([f053b41](https://github.com/wangy1931/cloudwiz-web/commit/f053b41))
* **plugins:** began work on supporting having plugins outside grafana, for example in grafana data dir, next step is to be able to easily specify what plugins you waant to install ([f6772bb](https://github.com/wangy1931/cloudwiz-web/commit/f6772bb))
* **plugins:** made panels work as plugins ([4a69de1](https://github.com/wangy1931/cloudwiz-web/commit/4a69de1))
* **plugins:** made plugins that live outside public work ([65a7fa3](https://github.com/wangy1931/cloudwiz-web/commit/65a7fa3))
* **table panel:** fixed issue with column selection for new table panel ([fb9e8d2](https://github.com/wangy1931/cloudwiz-web/commit/fb9e8d2))
* **table panel:** table panel can now show nested object data, closes [#3263](https://github.com/wangy1931/cloudwiz-web/issues/3263) ([cf1e167](https://github.com/wangy1931/cloudwiz-web/commit/cf1e167))
* **table_panel:** adds invert color order functionality ([1a8579c](https://github.com/wangy1931/cloudwiz-web/commit/1a8579c))
* **tablepanel:** added more unit tests for table transforms ([6062930](https://github.com/wangy1931/cloudwiz-web/commit/6062930))
* **tablepanel:** added new renderer spec ([5d166dc](https://github.com/wangy1931/cloudwiz-web/commit/5d166dc))
* **tablepanel:** added support for column sorting ([d06b940](https://github.com/wangy1931/cloudwiz-web/commit/d06b940))
* **tablepanel:** added time series aggregations transform mode, [#3219](https://github.com/wangy1931/cloudwiz-web/issues/3219) ([93851a9](https://github.com/wangy1931/cloudwiz-web/commit/93851a9))
* **tablepanel:** began refactorin out table row html generation to write unit tests for it ([1b83742](https://github.com/wangy1931/cloudwiz-web/commit/1b83742))
* **tablepanel:** completed work on time series aggregations table transform, [#3219](https://github.com/wangy1931/cloudwiz-web/issues/3219) ([aad824a](https://github.com/wangy1931/cloudwiz-web/commit/aad824a))
* **tablepanel:** fixed header, and pagination styling ([7387f2e](https://github.com/wangy1931/cloudwiz-web/commit/7387f2e))
* **tablepanel:** fixed header, and pagination styling ([7d3146e](https://github.com/wangy1931/cloudwiz-web/commit/7d3146e))
* **tablepanel:** lots of work on table panel ([90cca93](https://github.com/wangy1931/cloudwiz-web/commit/90cca93))
* **tablepanel:** made annotations transform work ([1bec6c2](https://github.com/wangy1931/cloudwiz-web/commit/1bec6c2))
* **tablepanel:** minor change ([99ee38c](https://github.com/wangy1931/cloudwiz-web/commit/99ee38c))
* **tablepanel:** minor fix ([163b45c](https://github.com/wangy1931/cloudwiz-web/commit/163b45c))
* **tablepanel:** minor progress ([da9c792](https://github.com/wangy1931/cloudwiz-web/commit/da9c792))
* **tablepanel:** minor progress on table panel ([8171cd5](https://github.com/wangy1931/cloudwiz-web/commit/8171cd5))
* **tablepanel:** minor progress on table panel ([93b4f3f](https://github.com/wangy1931/cloudwiz-web/commit/93b4f3f))
* **tablepanel:** more column style rules ([0a1af65](https://github.com/wangy1931/cloudwiz-web/commit/0a1af65))
* **tablepanel:** paging is starting to work ([8a61ec4](https://github.com/wangy1931/cloudwiz-web/commit/8a61ec4))
* **tablepanel:** renamed some table panel schema things ([00a479d](https://github.com/wangy1931/cloudwiz-web/commit/00a479d))
* **tablepanel:** work on table panel ([867b838](https://github.com/wangy1931/cloudwiz-web/commit/867b838))
* **tablepanel:** work on table panel options ([60c7bfe](https://github.com/wangy1931/cloudwiz-web/commit/60c7bfe))
* **tablepanel:** worked on cell / value threshold coloring ([b8e6fcf](https://github.com/wangy1931/cloudwiz-web/commit/b8e6fcf))
* **tablepanel:** worked on issues and improving defaults ([87c718f](https://github.com/wangy1931/cloudwiz-web/commit/87c718f))
* **tablepanel:** worked on more display options for table panel ([5c0cf9f](https://github.com/wangy1931/cloudwiz-web/commit/5c0cf9f))
* **tablepanel/elasticsearch:** extended elasticsearch data source and query editor to support document queries ([4e37290](https://github.com/wangy1931/cloudwiz-web/commit/4e37290))
* **timepicker:** always show refresh button ([ba5b127](https://github.com/wangy1931/cloudwiz-web/commit/ba5b127)), closes [#1628](https://github.com/wangy1931/cloudwiz-web/issues/1628) [#1208](https://github.com/wangy1931/cloudwiz-web/issues/1208)



# 3.0.0 Stable (2016-05-11)

* **Templating**: Fixed issue with new data source variable not persisting current selected value, fixes [#4934](https://github.com/grafana/grafana/issues/4934)

# 3.0.0-beta7 (2016-05-02)

### Bug fixes
* **Dashboard title**: Fixed max dashboard title width (media query) for large screens,  fixes [#4859](https://github.com/grafana/grafana/issues/4859)
* **Annotations**: Fixed issue with entering annotation edit view, fixes [#4857](https://github.com/grafana/grafana/issues/4857)
* **Remove query**: Fixed issue with removing query for data sources without collapsable query editors, fixes [#4856](https://github.com/grafana/grafana/issues/4856)
* **Graphite PNG**: Fixed issue graphite png rendering option, fixes [#4864](https://github.com/grafana/grafana/issues/4864)
* **InfluxDB**: Fixed issue missing plus group by iconn, fixes [#4862](https://github.com/grafana/grafana/issues/4862)
* **Graph**: Fixes missing line mode for thresholds, fixes [#4902](https://github.com/grafana/grafana/pull/4902)

### Enhancements
* **InfluxDB**: Added new functions moving_average and difference to query editor, closes [#4698](https://github.com/grafana/grafana/issues/4698)

# 3.0.0-beta6 (2016-04-29)

### Enhancements
* **Singlestat**: Support for gauges in singlestat panel. closes [#3688](https://github.com/grafana/grafana/pull/3688)
* **Templating**: Support for data source as variable, closes [#816](https://github.com/grafana/grafana/pull/816)

### Bug fixes
* **InfluxDB 0.12**: Fixed issue templating and `show tag values` query only returning tags for first measurement,  fixes [#4726](https://github.com/grafana/grafana/issues/4726)
* **Templating**: Fixed issue with regex formating when matching multiple values, fixes [#4755](https://github.com/grafana/grafana/issues/4755)
* **Templating**: Fixed issue with custom all value and escaping, fixes [#4736](https://github.com/grafana/grafana/issues/4736)
* **Dashlist**: Fixed issue dashboard list panel and caching tags, fixes [#4768](https://github.com/grafana/grafana/issues/4768)
* **Graph**: Fixed issue with unneeded scrollbar in legend for Firefox, fixes [#4760](https://github.com/grafana/grafana/issues/4760)
* **Table panel**: Fixed issue table panel formating string array properties, fixes [#4791](https://github.com/grafana/grafana/issues/4791)
* **grafana-cli**: Improve error message when failing to install plugins due to corrupt response, fixes [#4651](https://github.com/grafana/grafana/issues/4651)
* **Singlestat**: Fixes prefix an postfix for gauges, fixes [#4812](https://github.com/grafana/grafana/issues/4812)
* **Singlestat**: Fixes auto-refresh on change for some options, fixes [#4809](https://github.com/grafana/grafana/issues/4809)

### Breaking changes
**Data Source Query Editors**: Issue [#3900](https://github.com/grafana/grafana/issues/3900)

Query editors have been updated to use the new form styles. External data source plugins needs to be
updated to work. Sorry to introduce breaking change this late in beta phase. We wanted to get this change
in before 3.0 stable is released so we don't have to break data sources in next release (3.1). If you are
a data source plugin author and want help for how the new form styles work please ask for help in
slack channel (link to slack channel in readme).

# 3.0.0-beta5 (2016-04-15)

### Bug fixes
* **grafana-cli**: Fixed issue grafana-cli tool, did not detect the right plugin dir, fixes [#4723](https://github.com/grafana/grafana/issues/4723)
* **Graph**: Fixed issue with light theme text color issue in tooltip, fixes [#4702](https://github.com/grafana/grafana/issues/4702)
* **Snapshot**: Fixed issue with empty snapshots, fixes [#4706](https://github.com/grafana/grafana/issues/4706)

# 3.0.0-beta4 (2016-04-13)

### Bug fixes
* **Home dashboard**: Fixed issue with permission denied error on home dashboard, fixes [#4686](https://github.com/grafana/grafana/issues/4686)
* **Templating**: Fixed issue templating variables that use regex extraction, fixes [#4672](https://github.com/grafana/grafana/issues/4672)

# 3.0.0-beta3 (2016-04-12)

### Enhancements
* **InfluxDB**: Changed multi query encoding to work with InfluxDB 0.11 & 0.12, closes [#4533](https://github.com/grafana/grafana/issues/4533)
* **Timepicker**: Add arrows and shortcuts for moving back and forth in current dashboard, closes [#119](https://github.com/grafana/grafana/issues/119)

### Bug fixes
* **Postgres**: Fixed page render crash when using postgres, fixes [#4558](https://github.com/grafana/grafana/issues/4558)
* **Table panel**: Fixed table panel bug when trying to show annotations in table panel, fixes [#4563](https://github.com/grafana/grafana/issues/4563)
* **App Config**: Fixed app config issue showing content of other app config, fixes [#4575](https://github.com/grafana/grafana/issues/4575)
* **Graph Panel**: Fixed legend option max not updating, fixes [#4601](https://github.com/grafana/grafana/issues/4601)
* **Graph Panel**: Fixed issue where newly added graph panels shared same axes config, fixes [#4582](https://github.com/grafana/grafana/issues/4582)
* **Graph Panel**: Fixed issue with axis labels overlapping Y-axis, fixes [#4626](https://github.com/grafana/grafana/issues/4626)
* **InfluxDB**: Fixed issue with templating query containing template variable, fixes [#4602](https://github.com/grafana/grafana/issues/4602)
* **Graph Panel**: Fixed issue with hiding series and stacking, fixes [#4557](https://github.com/grafana/grafana/issues/4557)
* **Graph Panel**: Fixed issue with legend height in table mode with few series, affected iframe embedding as well, fixes [#4640](https://github.com/grafana/grafana/issues/4640)

# 3.0.0-beta2 (2016-04-04)

### New Features (introduces since 3.0-beta1)
* **Preferences**: Set home dashboard on user and org level, closes [#1678](https://github.com/grafana/grafana/issues/1678)
* **Preferences**: Set timezone on user and org level, closes [#3214](https://github.com/grafana/grafana/issues/3214), [#1200](https://github.com/grafana/grafana/issues/1200)
* **Preferences**: Set theme on user and org level, closes [#3214](https://github.com/grafana/grafana/issues/3214), [#1917](https://github.com/grafana/grafana/issues/1917)

### Bug fixes
* **Dashboard**: Fixed dashboard panel layout for mobile devices, fixes [#4529](https://github.com/grafana/grafana/issues/4529)
* **Table Panel**: Fixed issue with table panel sort, fixes [#4532](https://github.com/grafana/grafana/issues/4532)
* **Page Load Crash**: A Datasource with null jsonData would make Grafana fail to load page, fixes [#4536](https://github.com/grafana/grafana/issues/4536)
* **Metrics tab**: Fix for missing datasource name in datasource selector, fixes [#4541](https://github.com/grafana/grafana/issues/4540)
* **Graph**: Fix legend in table mode with series on right-y axis, fixes [#4551](https://github.com/grafana/grafana/issues/4551), [#1145](https://github.com/grafana/grafana/issues/1145)

# 3.0.0-beta1 (2016-03-31)

### New Features
* **Playlists**: Playlists can now be persisted and started from urls, closes [#3655](https://github.com/grafana/grafana/issues/3655)
* **Metadata**: Settings panel now shows dashboard metadata, closes [#3304](https://github.com/grafana/grafana/issues/3304)
* **InfluxDB**: Support for policy selection in query editor, closes [#2018](https://github.com/grafana/grafana/issues/2018)
* **Snapshots UI**: Dashboard snapshots list can be managed through UI, closes[#1984](https://github.com/grafana/grafana/issues/1984)
* **Prometheus**: Prometheus annotation support, closes[#2883](https://github.com/grafana/grafana/pull/2883)
* **Cli**: New cli tool for downloading and updating plugins
* **Annotations**: Annotations can now contain links that can be clicked (you can navigate on to annotation popovers), closes [#1588](https://github.com/grafana/grafana/issues/1588)
* **Opentsdb**: Opentsdb 2.2 filters support, closes[#3077](https://github.com/grafana/grafana/issues/3077)

### Breaking changes
* **Plugin API**: Both datasource and panel plugin api (and plugin.json schema) have been updated, requiring an update to plugins. See [plugin api](https://github.com/grafana/grafana/blob/master/public/app/plugins/plugin_api.md) for more info.
* **InfluxDB 0.8.x** The data source for the old version of influxdb (0.8.x) is no longer included in default builds, but can easily be installed via improved plugin system, closes [#3523](https://github.com/grafana/grafana/issues/3523)
* **KairosDB** The data source is no longer included in default builds, but can easily be installed via improved plugin system, closes [#3524](https://github.com/grafana/grafana/issues/3524)
* **Templating**: Templating value formats (glob/regex/pipe etc) are now handled automatically and not specified by the user, this makes variable values possible to reuse in many contexts. It can in some edge cases break existing dashboards that have template variables that do not reload on dashboard load. To fix any issue just go into template variable options and update the variable (so it's values are reloaded.).

### Enhancements
* **LDAP**: Support for nested LDAP Groups, closes [#4401](https://github.com/grafana/grafana/issues/4401), [#3808](https://github.com/grafana/grafana/issues/3808)
* **Sessions**: Support for memcached as session storage, closes [#3458](https://github.com/grafana/grafana/issues/3458)
* **mysql**: Grafana now supports ssl for mysql, closes [#3584](https://github.com/grafana/grafana/issues/3584)
* **snapshot**: Annotations are now included in snapshots, closes [#3635](https://github.com/grafana/grafana/issues/3635)
* **Admin**: Admin can now have global overview of Grafana setup, closes [#3812](https://github.com/grafana/grafana/issues/3812)
* **graph**: Right side legend height is now fixed at row height, closes [#1277](https://github.com/grafana/grafana/issues/1277)
* **Table**: All content in table panel is now html escaped, closes [#3673](https://github.com/grafana/grafana/issues/3673)
* **graph**: Template variables can now be used in TimeShift and TimeFrom, closes[#1960](https://github.com/grafana/grafana/issues/1960)
* **Tooltip**: Optionally add milliseconds to timestamp in tool tip, closes[#2248](https://github.com/grafana/grafana/issues/2248)
* **Opentsdb**: Support milliseconds when using openTSDB datasource, closes [#2865](https://github.com/grafana/grafana/issues/2865)
* **Opentsdb**: Add support for annotations, closes[#664](https://github.com/grafana/grafana/issues/664)

### Bug fixes
* **Playlist**: Fix for memory leak when running a playlist, closes [#3794](https://github.com/grafana/grafana/pull/3794)
* **InfluxDB**: Fix for InfluxDB and table panel when using Format As Table and having group by time, fixes [#3928](https://github.com/grafana/grafana/issues/3928)
* **Panel Time shift**: Fix for panel time range and using dashboard times liek `Today` and `This Week`, fixes [#3941](https://github.com/grafana/grafana/issues/3941)
* **Row repeat**: Repeated rows will now appear next to each other and not by the bottom of the dashboard, fixes [#3942](https://github.com/grafana/grafana/issues/3942)
* **Png renderer**: Fix for phantomjs path on windows, fixes [#3657](https://github.com/grafana/grafana/issues/3657)

# 2.6.1 (unrelased, 2.6.x branch)

### New Features
* **Elasticsearch**: Support for derivative unit option, closes [#3512](https://github.com/grafana/grafana/issues/3512)

### Bug fixes
* **Graph Panel**: Fixed typehead when adding series style override, closes [#3554](https://github.com/grafana/grafana/issues/3554)

# 2.6.0 (2015-12-14)

### New Features
* **Elasticsearch**: Support for pipeline aggregations Moving average and derivative, closes [#2715](https://github.com/grafana/grafana/issues/2715)
* **Elasticsearch**: Support for inline script and missing options for metrics, closes [#3500](https://github.com/grafana/grafana/issues/3500)
* **Syslog**: Support for syslog logging, closes [#3161](https://github.com/grafana/grafana/pull/3161)
* **Timepicker**: Always show refresh button even with refresh rate, closes [#3498](https://github.com/grafana/grafana/pull/3498)
* **Login**: Make it possible to change the login hint on the login page, closes [#2571](https://github.com/grafana/grafana/pull/2571)

### Bug Fixes
* **metric editors**: Fix for clicking typeahead auto dropdown option, fixes [#3428](https://github.com/grafana/grafana/issues/3428)
* **influxdb**: Fixed issue showing Group By label only on first query, fixes [#3453](https://github.com/grafana/grafana/issues/3453)
* **logging**: Add more verbose info logging for http reqeusts, closes [#3405](https://github.com/grafana/grafana/pull/3405)

# 2.6.0-Beta1 (2015-12-04)

### New Table Panel
* **table**:  New powerful and flexible table panel, closes [#215](https://github.com/grafana/grafana/issues/215)

### Enhancements
* **CloudWatch**: Support for multiple AWS Credentials, closes [#3053](https://github.com/grafana/grafana/issues/3053), [#3080](https://github.com/grafana/grafana/issues/3080)
* **Elasticsearch**: Support for dynamic daily indices for annotations, closes [#3061](https://github.com/grafana/grafana/issues/3061)
* **Elasticsearch**: Support for setting min_doc_count for date histogram, closes [#3416](https://github.com/grafana/grafana/issues/3416)
* **Graph Panel**: Option to hide series with all zeroes from legend and tooltip, closes [#1381](https://github.com/grafana/grafana/issues/1381), [#3336](https://github.com/grafana/grafana/issues/3336)

### Bug Fixes
* **cloudwatch**: fix for handling of period for long time ranges, fixes [#3086](https://github.com/grafana/grafana/issues/3086)
* **dashboard**: fix for collapse row by clicking on row title, fixes [#3065](https://github.com/grafana/grafana/issues/3065)
* **influxdb**: fix for relative time ranges `last x months` and `last x years`, fixes [#3067](https://github.com/grafana/grafana/issues/3067)
* **graph**: layout fix for color picker when right side legend was enabled, fixes [#3093](https://github.com/grafana/grafana/issues/3093)
* **elasticsearch**: disabling elastic query (via eye) caused error, fixes [#3300](https://github.com/grafana/grafana/issues/3300)

### Breaking changes
* **elasticsearch**: Manual json edited queries are not supported any more (They very barely worked in 2.5)

# 2.5 (2015-10-28)

**New Feature: Mix data sources**
- A built in data source is now available named `-- Mixed --`, When picked in the metrics tab,
it allows you to add queries of differnet data source types & instances to the same graph/panel!
[Issue #436](https://github.com/grafana/grafana/issues/436)

**New Feature: Elasticsearch Metrics Query Editor and Viz Support**
- Feature rich query editor and processing features enables you to issues all kind of metric queries to Elasticsearch
- See [Issue #1034](https://github.com/grafana/grafana/issues/1034) for more info.

**New Feature: New and much improved time picker**
- Support for quick ranges like `Today`, `This day last week`, `This week`, `The day so far`, etc.
- Improved UI and improved support for UTC, [Issue #2761](https://github.com/grafana/grafana/issues/2761) for more info.

**User Onboarding**
- Org admin can now send email invites (or invite links) to people who are not yet Grafana users
- Sign up flow now supports email verification (if enabled)
- See [Issue #2353](https://github.com/grafana/grafana/issues/2353) for more info.

**Other new Features && Enhancements**
- [Pull  #2720](https://github.com/grafana/grafana/pull/2720). Admin: Initial basic quota support (per Org)
- [Issue #2577](https://github.com/grafana/grafana/issues/2577). Panel: Resize handles in panel bottom right corners for easy width and height change
- [Issue #2457](https://github.com/grafana/grafana/issues/2457). Admin: admin page for all grafana organizations (list / edit view)
- [Issue #1186](https://github.com/grafana/grafana/issues/1186). Time Picker: New option `today`, will set time range from midnight to now
- [Issue #2647](https://github.com/grafana/grafana/issues/2647). InfluxDB: You can now set group by time interval on each query
- [Issue #2599](https://github.com/grafana/grafana/issues/2599). InfluxDB: Improved alias support, you can now use the `AS` clause for each select statement
- [Issue #2708](https://github.com/grafana/grafana/issues/2708). InfluxDB: You can now set math expression for select clauses.
- [Issue #1575](https://github.com/grafana/grafana/issues/1575). Drilldown link: now you can click on the external link icon in the panel header to access drilldown links!
- [Issue #1646](https://github.com/grafana/grafana/issues/1646). OpenTSDB: Fetch list of aggregators from OpenTSDB
- [Issue #2955](https://github.com/grafana/grafana/issues/2955). Graph: More axis units (Length, Volume, Temperature, Pressure, etc), thanks @greglook
- [Issue #2928](https://github.com/grafana/grafana/issues/2928). LDAP: Support for searching for groups memberships, i.e. POSIX (no memberOf) schemas, also multiple ldap servers, and root ca cert, thanks @abligh

**Fixes**
- [Issue #2413](https://github.com/grafana/grafana/issues/2413). InfluxDB 0.9: Fix for handling empty series object in response from influxdb
- [Issue #2574](https://github.com/grafana/grafana/issues/2574). Snapshot: Fix for snapshot with expire 7 days option, 7 days option not correct, was 7 hours
- [Issue #2568](https://github.com/grafana/grafana/issues/2568). AuthProxy: Fix for server side rendering of panel when using auth proxy
- [Issue #2490](https://github.com/grafana/grafana/issues/2490). Graphite: Dashboard import was broken in 2.1 and 2.1.1, working now
- [Issue #2565](https://github.com/grafana/grafana/issues/2565). TimePicker: Fix for when you applied custom time range it did not refreh dashboard
- [Issue #2563](https://github.com/grafana/grafana/issues/2563). Annotations: Fixed issue when html sanitizer failes for title to annotation body, now fallbacks to html escaping title and text
- [Issue #2564](https://github.com/grafana/grafana/issues/2564). Templating: Another atempt at fixing #2534 (Init multi value template var used in repeat panel from url)
- [Issue #2620](https://github.com/grafana/grafana/issues/2620). Graph: multi series tooltip did no highlight correct point when stacking was enabled and series were of different resolution
- [Issue #2636](https://github.com/grafana/grafana/issues/2636). InfluxDB: Do no show template vars in dropdown for tag keys and group by keys
- [Issue #2604](https://github.com/grafana/grafana/issues/2604). InfluxDB: More alias options, can now use `$[0-9]` syntax to reference part of a measurement name (seperated by dots)

**Breaking Changes**
- Notice to makers/users of custom data sources, there is a minor breaking change in 2.2 that
require an update to custom data sources for them to work in 2.2. [Read this doc](https://github.com/grafana/grafana/tree/master/docs/sources/datasources/plugin_api.md) for more on the
data source api change.
- Data source api changes, [PLUGIN_CHANGES.md](https://github.com/grafana/grafana/blob/master/public/app/plugins/PLUGIN_CHANGES.md)
- The duplicate query function used in data source editors is changed, and moveMetricQuery function was renamed

**Tech (Note for devs)**
Started using Typescript (transpiled to ES5), uncompiled typescript files and less files are in public folder (in source tree)
This folder is never modified by build steps. Compiled css and javascript files are put in public_gen, all other files
that do not undergo transformation are just copied from public to public_gen, it is public_gen that is used by grafana-server
if it is found.

Grunt & Watch tasks:
- `grunt` : default task, will remove public_gen, copy over all files from public, do less & typescript compilation
- `grunt watch`: will watch for changes to less, and typescript files and compile them to public_gen, and for other files it will just copy them to public_gen


# 2.1.3 (2015-08-24)

**Fixes**
- [Issue #2580](https://github.com/grafana/grafana/issues/2580). Packaging: ldap.toml was not marked as config file and could be overwritten in upgrade
- [Issue #2564](https://github.com/grafana/grafana/issues/2564). Templating: Another atempt at fixing #2534 (Init multi value template var used in repeat panel from url)

# 2.1.2 (2015-08-20)

**Fixes**
- [Issue #2558](https://github.com/grafana/grafana/issues/2558). DragDrop: Fix for broken drag drop behavior
- [Issue #2534](https://github.com/grafana/grafana/issues/2534). Templating: fix for setting template variable value via url and having repeated panels or rows

# 2.1.1 (2015-08-11)

**Fixes**
- [Issue #2443](https://github.com/grafana/grafana/issues/2443). Templating: Fix for buggy repeat row behavior when combined with with repeat panel due to recent change before 2.1 release
- [Issue #2442](https://github.com/grafana/grafana/issues/2442). Templating: Fix text panel when using template variables in text in in repeated panel
- [Issue #2446](https://github.com/grafana/grafana/issues/2446). InfluxDB: Fix for using template vars inside alias field (InfluxDB 0.9)
- [Issue #2460](https://github.com/grafana/grafana/issues/2460). SinglestatPanel: Fix to handle series with no data points
- [Issue #2461](https://github.com/grafana/grafana/issues/2461). LDAP: Fix for ldap users with empty email address
- [Issue #2484](https://github.com/grafana/grafana/issues/2484). Graphite: Fix bug when using series ref (#A-Z) and referenced series is hidden in query editor.
- [Issue #1896](https://github.com/grafana/grafana/issues/1896). Postgres: Dashboard search is now case insensitive when using Postgres

**Enhancements**
- [Issue #2477](https://github.com/grafana/grafana/issues/2477). InfluxDB(0.9): Added more condition operators (`<`, `>`, `<>`, `!~`), thx @thuck
- [Issue #2483](https://github.com/grafana/grafana/issues/2484). InfluxDB(0.9): Use $col as option in alias patterns, thx @thuck

# 2.1.0 (2015-08-04)

**Data sources**
- [Issue #1525](https://github.com/grafana/grafana/issues/1525). InfluxDB: Full support for InfluxDB 0.9 with new adapted query editor
- [Issue #2191](https://github.com/grafana/grafana/issues/2191). KariosDB: Grafana now ships with a KariosDB data source plugin, thx @masaori335
- [Issue #1177](https://github.com/grafana/grafana/issues/1177). OpenTSDB: Limit tags by metric, OpenTSDB config option tsd.core.meta.enable_realtime_ts must enabled for OpenTSDB lookup api
- [Issue #1250](https://github.com/grafana/grafana/issues/1250). OpenTSDB: Support for template variable values lookup queries

**New dashboard features**
- [Issue #1144](https://github.com/grafana/grafana/issues/1144). Templating: You can now select multiple template variables values at the same time.
- [Issue #1922](https://github.com/grafana/grafana/issues/1922). Templating: Specify multiple variable values via URL params.
- [Issue #1888](https://github.com/grafana/grafana/issues/1144). Templating: Repeat panel or row for each selected template variable value
- [Issue #1888](https://github.com/grafana/grafana/issues/1944). Dashboard: Custom Navigation links & dynamic links to related dashboards
- [Issue #590](https://github.com/grafana/grafana/issues/590).   Graph: Define series color using regex rule
- [Issue #2162](https://github.com/grafana/grafana/issues/2162). Graph: New series style override, negative-y transform and stack groups
- [Issue #2096](https://github.com/grafana/grafana/issues/2096). Dashboard list panel: Now supports search by multiple tags
- [Issue #2203](https://github.com/grafana/grafana/issues/2203). Singlestat: Now support string values

**User or Organization admin**
- [Issue #1899](https://github.com/grafana/grafana/issues/1899). Organization: You can now update the organization user role directly (without removing and readding the organization user).
- [Issue #2088](https://github.com/grafana/grafana/issues/2088). Roles: New user role `Read Only Editor` that replaces the old `Viewer` role behavior

**Backend**
- [Issue #2218](https://github.com/grafana/grafana/issues/2218). Auth: You can now authenicate against api with username / password using basic auth
- [Issue #2095](https://github.com/grafana/grafana/issues/2095). Search: Search now supports filtering by multiple dashboard tags
- [Issue #1905](https://github.com/grafana/grafana/issues/1905). Github OAuth: You can now configure a Github team membership requirement, thx @dewski
- [Issue #2052](https://github.com/grafana/grafana/issues/2052). Github OAuth: You can now configure a Github organization requirement, thx @indrekj
- [Issue #1891](https://github.com/grafana/grafana/issues/1891). Security: New config option to disable the use of gravatar for profile images
- [Issue #1921](https://github.com/grafana/grafana/issues/1921). Auth: Support for user authentication via reverse proxy header (like X-Authenticated-User, or X-WEBAUTH-USER)
- [Issue #960](https://github.com/grafana/grafana/issues/960).   Search: Backend can now index a folder with json files, will be available in search (saving back to folder is not supported, this feature is meant for static generated json dashboards)

**Breaking changes**
- [Issue #1826](https://github.com/grafana/grafana/issues/1826). User role 'Viewer' are now prohibited from entering edit mode (and doing other transient dashboard edits). A new role `Read Only Editor` will replace the old Viewer behavior
- [Issue #1928](https://github.com/grafana/grafana/issues/1928). HTTP API: GET /api/dashboards/db/:slug response changed property `model` to `dashboard` to match the POST request nameing
- Backend render URL changed from `/render/dashboard/solo` `render/dashboard-solo/` (in order to have consistent dashboard url `/dashboard/:type/:slug`)
- Search HTTP API response has changed (simplified), tags list moved to seperate HTTP resource URI
- Datasource HTTP api breaking change, ADD datasource is now POST /api/datasources/, update is now PUT /api/datasources/:id

**Fixes**
- [Issue #2185](https://github.com/grafana/grafana/issues/2185). Graph: fixed PNG rendering of panels with legend table to the right
- [Issue #2163](https://github.com/grafana/grafana/issues/2163). Backend: Load dashboards with capital letters in the dashboard url slug (url id)

# 2.0.3 (unreleased - 2.0.x branch)

**Fixes**
- [Issue #1872](https://github.com/grafana/grafana/issues/1872). Firefox/IE issue, invisible text in dashboard search fixed
- [Issue #1857](https://github.com/grafana/grafana/issues/1857). /api/login/ping Fix for issue when behind reverse proxy and subpath
- [Issue #1863](https://github.com/grafana/grafana/issues/1863). MySQL: Dashboard.data column type changed to mediumtext (sql migration added)

# 2.0.2 (2015-04-22)

**Fixes**
- [Issue #1832](https://github.com/grafana/grafana/issues/1832). Graph Panel + Legend Table mode: Many series casued zero height graph, now legend will never reduce the height of the graph below 50% of row height.
- [Issue #1846](https://github.com/grafana/grafana/issues/1846). Snapshots: Fixed issue with snapshoting dashboards with an interval template variable
- [Issue #1848](https://github.com/grafana/grafana/issues/1848). Panel timeshift: You can now use panel timeshift without a relative time override

# 2.0.1 (2015-04-20)

**Fixes**
- [Issue #1784](https://github.com/grafana/grafana/issues/1784). Data source proxy: Fixed issue with using data source proxy when grafana is behind nginx suburl
- [Issue #1749](https://github.com/grafana/grafana/issues/1749). Graph Panel: Table legends are now visible when rendered to PNG
- [Issue #1786](https://github.com/grafana/grafana/issues/1786). Graph Panel: Legend in table mode now aligns, graph area is reduced depending on how many series
- [Issue #1734](https://github.com/grafana/grafana/issues/1734). Support for unicode / international characters in dashboard title (improved slugify)
- [Issue #1782](https://github.com/grafana/grafana/issues/1782). Github OAuth: Now works with Github for Enterprise, thanks @williamjoy
- [Issue #1780](https://github.com/grafana/grafana/issues/1780). Dashboard snapshot: Should not require login to view snapshot, Fixes #1780

# 2.0.0-Beta3 (2015-04-12)

**RPM / DEB Package changes (to follow HFS)**
- binary name changed to grafana-server
- does not install to `/opt/grafana` any more, installs to `/usr/share/grafana`
- binary to `/usr/sbin/grafana-server`
- init.d script improvements, renamed to `/etc/init.d/grafana-server`
- added default file with environment variables,
  - `/etc/default/grafana-server` (deb/ubuntu)
  - `/etc/sysconfig/grafana-server` (centos/redhat)

- added systemd service file, tested on debian jessie and centos7
- config file in same location `/etc/grafana/grafana.ini` (now complete config file but with every setting commented out)
- data directory (where sqlite3) file is stored is now by default `/var/lib/grafana`
- no symlinking current to versions anymore
- For more info see [Issue #1758](https://github.com/grafana/grafana/issues/1758).

**Config breaking change (setting rename)**
- `[log] root_path` has changed to `[paths] logs`

# 2.0.0-Beta2  (...)

**Enhancements**
- [Issue #1701](https://github.com/grafana/grafana/issues/1701). Share modal: Override UI theme via URL param for Share link, rendered panel, or embedded panel
- [Issue #1660](https://github.com/grafana/grafana/issues/1660). OAuth: Specify allowed email address domains for google or and github oauth logins

**Fixes**
- [Issue #1649](https://github.com/grafana/grafana/issues/1649). HTTP API: grafana /render calls nows with api keys
- [Issue #1667](https://github.com/grafana/grafana/issues/1667). Datasource proxy & session timeout fix (casued 401 Unauthorized error after a while)
- [Issue #1707](https://github.com/grafana/grafana/issues/1707). Unsaved changes: Do not show for snapshots, scripted and file based dashboards
- [Issue #1703](https://github.com/grafana/grafana/issues/1703). Unsaved changes: Do not show for users with role `Viewer`
- [Issue #1675](https://github.com/grafana/grafana/issues/1675). Data source proxy: Fixed issue with Gzip enabled and data source proxy
- [Issue #1681](https://github.com/grafana/grafana/issues/1681). MySQL session: fixed problem using mysql as session store
- [Issue #1671](https://github.com/grafana/grafana/issues/1671). Data sources: Fixed issue with changing default data source (should not require full page load to take effect, now fixed)
- [Issue #1685](https://github.com/grafana/grafana/issues/1685). Search: Dashboard results should be sorted alphabetically
- [Issue #1673](https://github.com/grafana/grafana/issues/1673). Basic auth: Fixed issue when using basic auth proxy infront of Grafana

# 2.0.0-Beta1 (2015-03-30)

**Important Note**

Grafana 2.x is fundamentally different from 1.x; it now ships with an integrated backend server. Please read the [Documentation](http://docs.grafana.org) for more detailed about this SIGNIFCANT change to Grafana

**New features**
- [Issue #1623](https://github.com/grafana/grafana/issues/1623). Share Dashboard: Dashboard snapshot sharing (dash and data snapshot), save to local or save to public snapshot dashboard snapshots.raintank.io site
- [Issue #1622](https://github.com/grafana/grafana/issues/1622). Share Panel: The share modal now has an embed option, gives you an iframe that you can use to embedd a single graph on another web site
- [Issue #718](https://github.com/grafana/grafana/issues/718).   Dashboard: When saving a dashboard and another user has made changes inbetween the user is promted with a warning if he really wants to overwrite the other's changes
- [Issue #1331](https://github.com/grafana/grafana/issues/1331). Graph & Singlestat: New axis/unit format selector and more units (kbytes, Joule, Watt, eV), and new design for graph axis & grid tab and single stat options tab views
- [Issue #1241](https://github.com/grafana/grafana/issues/1242). Timepicker: New option in timepicker (under dashboard settings), to change ``now`` to be for example ``now-1m``, usefull when you want to ignore last minute because it contains incomplete data
- [Issue #171](https://github.com/grafana/grafana/issues/171).   Panel: Different time periods, panels can override dashboard relative time and/or add a time shift
- [Issue #1488](https://github.com/grafana/grafana/issues/1488). Dashboard: Clone dashboard / Save as
- [Issue #1458](https://github.com/grafana/grafana/issues/1458). User: persisted user option for dark or light theme  (no longer an option on a dashboard)
- [Issue #452](https://github.com/grafana/grafana/issues/452).   Graph: Adds logarithmic scale option for base 10, base 16 and base 1024

**Enhancements**
- [Issue #1366](https://github.com/grafana/grafana/issues/1366). Graph & Singlestat: Support for additional units, Fahrenheit (°F) and Celsius (°C), Humidity (%H), kW, watt-hour (Wh), kilowatt-hour (kWh), velocities (m/s, km/h, mpg, knot)
- [Issue #978](https://github.com/grafana/grafana/issues/978).   Graph: Shared tooltip improvement, can now support metrics of different resolution/intervals
- [Issue #1297](https://github.com/grafana/grafana/issues/1297). Graphite: Added cumulative and minimumBelow graphite functions
- [Issue #1296](https://github.com/grafana/grafana/issues/1296). InfluxDB: Auto escape column names with special characters. Thanks @steven-aerts
- [Issue #1321](https://github.com/grafana/grafana/issues/1321). SingleStatPanel: You can now use template variables in pre & postfix
- [Issue #599](https://github.com/grafana/grafana/issues/599).   Graph: Added right y axis label setting and graph support
- [Issue #1253](https://github.com/grafana/grafana/issues/1253). Graph & Singlestat: Users can now set decimal precision for legend and tooltips (override auto precision)
- [Issue #1255](https://github.com/grafana/grafana/issues/1255). Templating: Dashboard will now wait to load until all template variables that have refresh on load set or are initialized via url to be fully loaded and so all variables are in valid state before panels start issuing metric requests.
- [Issue #1344](https://github.com/grafana/grafana/issues/1344). OpenTSDB: Alias patterns (reference tag values), syntax is: $tag_tagname or [[tag_tagname]]

**Fixes**
- [Issue #1298](https://github.com/grafana/grafana/issues/1298). InfluxDB: Fix handling of empty array in templating variable query
- [Issue #1309](https://github.com/grafana/grafana/issues/1309). Graph: Fixed issue when using zero as a grid threshold
- [Issue #1345](https://github.com/grafana/grafana/issues/1345). UI: Fixed position of confirm modal when scrolled down
- [Issue #1372](https://github.com/grafana/grafana/issues/1372). Graphite: Fix for nested complex queries, where a query references a query that references another query (ie the #[A-Z] syntax)
- [Issue #1363](https://github.com/grafana/grafana/issues/1363). Templating: Fix to allow custom template variables to contain white space, now only splits on ','
- [Issue #1359](https://github.com/grafana/grafana/issues/1359). Graph: Fix for all series tooltip showing series with all null values when ``Hide Empty`` option is enabled
- [Issue #1497](https://github.com/grafana/grafana/issues/1497). Dashboard: Fixed memory leak when switching dashboards

**Changes**
- Dashboard title change & save will no longer create a new dashboard, it will just change the title.

**OpenTSDB breaking change**
- [Issue #1438](https://github.com/grafana/grafana/issues/1438). OpenTSDB: Automatic downsample interval passed to OpenTSDB (depends on timespan and graph width)
- NOTICE, Downsampling is now enabled by default, so if you have not picked a downsample aggregator in your metric query do so or your graphs will be missleading
- This will make Grafana a lot quicker for OpenTSDB users when viewing large time spans without having to change the downsample interval manually.

**Tech**
- [Issue #1311](https://github.com/grafana/grafana/issues/1311). Tech: Updated Font-Awesome from 3.2 to 4.2

# 1.9.1 (2014-12-29)

**Enhancements**
- [Issue #1028](https://github.com/grafana/grafana/issues/1028). Graph: New legend option ``hideEmtpy`` to hide series with only null values from legend
- [Issue #1242](https://github.com/grafana/grafana/issues/1242). OpenTSDB: Downsample query field now supports interval template variable
- [Issue #1126](https://github.com/grafana/grafana/issues/1126). InfluxDB: Support more than 10 series name segments when using alias ``$number`` patterns

**Fixes**
- [Issue #1251](https://github.com/grafana/grafana/issues/1251). Graph: Fix for y axis and scaled units (GiB etc) caused rounding, for example 400 GiB instead of 378 GiB
- [Issue #1199](https://github.com/grafana/grafana/issues/1199). Graph: fix for series tooltip when one series is hidden/disabled
- [Issue #1207](https://github.com/grafana/grafana/issues/1207). Graphite: movingAverage / movingMedian parameter type impovement, now handles int and interval parameter

# 1.9.0 (2014-12-02)

**Enhancements**
- [Issue #1130](https://github.com/grafana/grafana/issues/1130). SinglestatPanel: Added null point handling, and value to text mapping


**Fixes**
- [Issue #1087](https://github.com/grafana/grafana/issues/1087). Panel: Fixed IE9 crash due to angular drag drop
- [Issue #1093](https://github.com/grafana/grafana/issues/1093). SingleStatPanel: Fixed position for drilldown link tooltip when dashboard requires scrolling
- [Issue #1095](https://github.com/grafana/grafana/issues/1095). DrilldownLink: template variables in params property was not interpolated
- [Issue #1114](https://github.com/grafana/grafana/issues/1114). Graphite: Lexer fix, allow equal sign (=) in metric paths
- [Issue #1136](https://github.com/grafana/grafana/issues/1136). Graph: Fix to legend value Max and negative values
- [Issue #1150](https://github.com/grafana/grafana/issues/1150). SinglestatPanel: Fixed absolute drilldown link issue
- [Issue #1123](https://github.com/grafana/grafana/issues/1123). Firefox: Workaround for Firefox bug, casued input text fields to not be selectable and not have placeable cursor
- [Issue #1108](https://github.com/grafana/grafana/issues/1108). Graph: Fix for tooltip series order when series draw order was changed with zindex property

# 1.9.0-rc1 (2014-11-17)

**UI Improvements**
- [Issue #770](https://github.com/grafana/grafana/issues/770). UI: Panel dropdown menu replaced with a new panel menu

**Graph**
- [Issue #877](https://github.com/grafana/grafana/issues/877). Graph: Smart auto decimal precision when using scaled unit formats
- [Issue #850](https://github.com/grafana/grafana/issues/850). Graph: Shared tooltip that shows multiple series & crosshair line, thx @toni-moreno
- [Issue #940](https://github.com/grafana/grafana/issues/940). Graph: New series style override option "Fill below to", useful to visualize max & min as a shadow for the mean
- [Issue #1030](https://github.com/grafana/grafana/issues/1030). Graph: Legend table display/look changed, now includes column headers for min/max/avg, and full width (unless on right side)
- [Issue #861](https://github.com/grafana/grafana/issues/861). Graph: Export graph time series data as csv file

**New Panels**
- [Issue #951](https://github.com/grafana/grafana/issues/951). SingleStat: New singlestat panel

**Misc**
- [Issue #864](https://github.com/grafana/grafana/issues/846). Panel: Share panel feature, get a link to panel with the current time range
- [Issue #938](https://github.com/grafana/grafana/issues/938). Panel: Plugin panels now reside outside of app/panels directory
- [Issue #952](https://github.com/grafana/grafana/issues/952). Help: Shortcut "?" to open help modal with list of all shortcuts
- [Issue #991](https://github.com/grafana/grafana/issues/991). ScriptedDashboard: datasource services are now available in scripted dashboards, you can query datasource for metric keys, generate dashboards, and even save them in a scripted dashboard (see scripted_gen_and_save.js for example)
- [Issue #1041](https://github.com/grafana/grafana/issues/1041). Panel: All panels can now have links to other dashboards or absolute links, these links are available in the panel menu.

**Changes**
- [Issue #1007](https://github.com/grafana/grafana/issues/1007). Graph: Series hide/show toggle changed to be default exclusive, so clicking on a series name will show only that series. (SHIFT or meta)+click will toggle hide/show.

**OpenTSDB**
- [Issue #930](https://github.com/grafana/grafana/issues/930). OpenTSDB: Adding counter max and counter reset value to open tsdb query editor, thx @rsimiciuc
- [Issue #917](https://github.com/grafana/grafana/issues/917). OpenTSDB: Templating support for OpenTSDB series name and tags, thx @mchataigner

**InfluxDB**
- [Issue #714](https://github.com/grafana/grafana/issues/714). InfluxDB: Support for sub second resolution graphs

**Fixes**
- [Issue #925](https://github.com/grafana/grafana/issues/925). Graph: bar width calculation fix for some edge cases (bars would render on top of each other)
- [Issue #505](https://github.com/grafana/grafana/issues/505). Graph: fix for second y axis tick unit labels wrapping on the next line
- [Issue #987](https://github.com/grafana/grafana/issues/987). Dashboard: Collapsed rows became invisible when hide controls was enabled

=======
# 1.8.1 (2014-09-30)

**Fixes**
- [Issue #855](https://github.com/grafana/grafana/issues/855). Graph: Fix for scroll issue in graph edit mode when dropdown goes below screen
- [Issue #847](https://github.com/grafana/grafana/issues/847). Graph: Fix for series draw order not being the same after hiding/unhiding series
- [Issue #851](https://github.com/grafana/grafana/issues/851). Annotations: Fix for annotations not reloaded when switching between 2 dashboards with annotations
- [Issue #846](https://github.com/grafana/grafana/issues/846). Edit panes: Issue when open row or json editor when scrolled down the page, unable to scroll and you did not see editor
- [Issue #840](https://github.com/grafana/grafana/issues/840). Import: Fixes to import from json file and import from graphite. Issues was lingering state from previous dashboard.
- [Issue #859](https://github.com/grafana/grafana/issues/859). InfluxDB: Fix for bug when saving dashboard where title is the same as slugified url id
- [Issue #852](https://github.com/grafana/grafana/issues/852). White theme: Fixes for hidden series legend text and disabled annotations color

# 1.8.0 (2014-09-22)

Read this [blog post](http://grafana.org/blog/2014/09/11/grafana-1-8-0-rc1-released.html) for an overview of all improvements.

**Fixes**
- [Issue #802](https://github.com/grafana/grafana/issues/802). Annotations: Fix when using InfluxDB datasource
- [Issue #795](https://github.com/grafana/grafana/issues/795). Chrome: Fix for display issue in chrome beta & chrome canary when entering edit mode
- [Issue #818](https://github.com/grafana/grafana/issues/818). Graph: Added percent y-axis format
- [Issue #828](https://github.com/grafana/grafana/issues/828). Elasticsearch: saving new dashboard with title equal to slugified url would cause it to deleted.
- [Issue #830](https://github.com/grafana/grafana/issues/830). Annotations: Fix for elasticsearch annotations and mapping nested fields

# 1.8.0-RC1 (2014-09-12)

**UI polish / changes**
- [Issue #725](https://github.com/grafana/grafana/issues/725). UI: All modal editors are removed and replaced by an edit pane under menu. The look of editors is also updated and polished. Search dropdown is also shown as pane under menu and has seen some UI polish.

**Filtering/Templating feature overhaul**
- Filtering renamed to Templating, and filter items to variables
- Filter editing has gotten its own edit pane with much improved UI and options
- [Issue #296](https://github.com/grafana/grafana/issues/296). Templating: Can now retrieve variable values from a non-default data source
- [Issue #219](https://github.com/grafana/grafana/issues/219). Templating: Template variable value selection is now a typeahead autocomplete dropdown
- [Issue #760](https://github.com/grafana/grafana/issues/760). Templating: Extend template variable syntax to include $variable syntax replacement
- [Issue #234](https://github.com/grafana/grafana/issues/234). Templating: Interval variable type for time intervals summarize/group by parameter, included "auto" option, and auto step counts option.
- [Issue #262](https://github.com/grafana/grafana/issues/262). Templating: Ability to use template variables for function parameters via custom variable type, can be used as parameter for movingAverage or scaleToSeconds for example
- [Issue #312](https://github.com/grafana/grafana/issues/312). Templating: Can now use template variables in panel titles
- [Issue #613](https://github.com/grafana/grafana/issues/613). Templating: Full support for InfluxDB, filter by part of series names, extract series substrings, nested queries, multipe where clauses!
- Template variables can be initialized from url, with var-my_varname=value, breaking change, before it was just my_varname.
- Templating and url state sync has some issues that are not solved for this release, see [Issue #772](https://github.com/grafana/grafana/issues/772) for more details.

**InfluxDB Breaking changes**
- To better support templating, fill(0) and group by time low limit some changes has been made to the editor and query model schema
- Currently some of these changes are breaking
- If you used custom condition filter you need to open the graph in edit mode, the editor will update the schema, and the queries should work again
- If you used a raw query you need to remove the time filter and replace it with $timeFilter (this is done automatically when you switch from query editor to raw query, but old raw queries needs to updated)
- If you used group by and later removed the group by the graph could break, open in editor and should correct it
- InfluxDB annotation queries that used [[timeFilter]] should be updated to use $timeFilter syntax instead
- Might write an upgrade tool to update dashboards automatically, but right now master (1.8) includes the above breaking changes

**InfluxDB query editor enhancements**
- [Issue #756](https://github.com/grafana/grafana/issues/756). InfluxDB: Add option for fill(0) and fill(null), integrated help in editor for why this option is important when stacking series
- [Issue #743](https://github.com/grafana/grafana/issues/743). InfluxDB: A group by time option for all queries in graph panel that supports a low limit for auto group by time, very important for stacking and fill(0)
- The above to enhancements solves the problems associated with stacked bars and lines when points are missing, these issues are solved:
- [Issue #673](https://github.com/grafana/grafana/issues/673). InfluxDB: stacked bars missing intermediate data points, unless lines also enabled
- [Issue #674](https://github.com/grafana/grafana/issues/674). InfluxDB: stacked chart ignoring series without latest values
- [Issue #534](https://github.com/grafana/grafana/issues/534). InfluxDB: No order in stacked bars mode

**New features and improvements**
- [Issue #117](https://github.com/grafana/grafana/issues/117). Graphite: Graphite query builder can now handle functions that multiple series as arguments!
- [Issue #281](https://github.com/grafana/grafana/issues/281). Graphite: Metric node/segment selection is now a textbox with autocomplete dropdown, allow for custom glob expression for single node segment without entering text editor mode.
- [Issue #304](https://github.com/grafana/grafana/issues/304). Dashboard: View dashboard json, edit/update any panel using json editor, makes it possible to quickly copy a graph from one dashboard to another.
- [Issue #578](https://github.com/grafana/grafana/issues/578). Dashboard: Row option to display row title even when the row is visible
- [Issue #672](https://github.com/grafana/grafana/issues/672). Dashboard: panel fullscreen & edit state is present in url, can now link to graph in edit & fullscreen mode.
- [Issue #709](https://github.com/grafana/grafana/issues/709). Dashboard: Small UI look polish to search results, made dashboard title link are larger
- [Issue #425](https://github.com/grafana/grafana/issues/425). Graph: New section in 'Display Styles' tab to override any display setting on per series bases (mix and match lines, bars, points, fill, stack, line width etc)
- [Issue #634](https://github.com/grafana/grafana/issues/634). Dashboard: Dashboard tags now in different colors (from fixed palette) determined by tag name.
- [Issue #685](https://github.com/grafana/grafana/issues/685). Dashboard: New config.js option to change/remove window title prefix.
- [Issue #781](https://github.com/grafana/grafana/issues/781). Dashboard: Title URL is now slugified for greater URL readability, works with both ES & InfluxDB storage, is backward compatible
- [Issue #785](https://github.com/grafana/grafana/issues/785). Elasticsearch: Support for full elasticsearch lucene search grammar when searching for dashboards, better async search
- [Issue #787](https://github.com/grafana/grafana/issues/787). Dashboard: time range can now be read from URL parameters, will override dashboard saved time range

**Fixes**
- [Issue #696](https://github.com/grafana/grafana/issues/696). Graph: Fix for y-axis format 'none' when values are in scientific notation (ex 2.3e-13)
- [Issue #733](https://github.com/grafana/grafana/issues/733). Graph: Fix for tooltip current value decimal precision when 'none' axis format was selected
- [Issue #697](https://github.com/grafana/grafana/issues/697). Graphite: Fix for Glob syntax in graphite queries ([1-9] and ?) that made the query editor / parser bail and fallback to a text box.
- [Issue #702](https://github.com/grafana/grafana/issues/702). Graphite: Fix for nonNegativeDerivative function, now possible to not include optional first parameter maxValue
- [Issue #277](https://github.com/grafana/grafana/issues/277). Dashboard: Fix for timepicker date & tooltip when UTC timezone selected.
- [Issue #699](https://github.com/grafana/grafana/issues/699). Dashboard: Fix for bug when adding rows from dashboard settings dialog.
- [Issue #723](https://github.com/grafana/grafana/issues/723). Dashboard: Fix for hide controls setting not used/initialized on dashboard load
- [Issue #724](https://github.com/grafana/grafana/issues/724). Dashboard: Fix for zoom out causing right hand "to" range to be set in the future.

**Tech**
- Upgraded from angularjs 1.1.5 to 1.3 beta 17;
- Switch from underscore to lodash
- helpers to easily unit test angularjs controllers and services
- Test coverage through coveralls
- Upgrade from jquery 1.8.0 to 2.1.1 (**Removes support for IE7 & IE8**)

# 1.7.1 (unreleased)

**Fixes**
- [Issue #691](https://github.com/grafana/grafana/issues/691). Dashboard: Tooltip fixes, sometimes they would not show, and sometimes they would get stuck.
- [Issue #695](https://github.com/grafana/grafana/issues/695). Dashboard: Tooltip on goto home menu icon would get stuck after clicking on it

# 1.7.0 (2014-08-11)

**Fixes**
- [Issue #652](https://github.com/grafana/grafana/issues/652). Timepicker: Entering custom date range impossible when refresh is low (now is constantly reset)
- [Issue #450](https://github.com/grafana/grafana/issues/450). Graph: Tooltip does not disappear sometimes and would get stuck
- [Issue #655](https://github.com/grafana/grafana/issues/655). General: Auto refresh not initiated / started after dashboard loading
- [Issue #657](https://github.com/grafana/grafana/issues/657). General: Fix for refresh icon in IE browsers
- [Issue #661](https://github.com/grafana/grafana/issues/661). Annotations: Elasticsearch querystring with filter template replacements was not interpolated
- [Issue #660](https://github.com/grafana/grafana/issues/660). OpenTSDB: fix opentsdb queries that returned more than one series

**Change**
- [Issue #681](https://github.com/grafana/grafana/issues/681). Dashboard: The panel error bar has been replaced with a small error indicator, this indicator does not change panel height and is a lot less intrusive. Hover over it for short details, click on it for more details.

# 1.7.0-rc1 (2014-08-05)

**New features or improvements**
- [Issue #581](https://github.com/grafana/grafana/issues/581). InfluxDB: Add continuous query in series results (series typeahead).
- [Issue #584](https://github.com/grafana/grafana/issues/584). InfluxDB: Support for alias & alias patterns when using raw query mode
- [Issue #394](https://github.com/grafana/grafana/issues/394). InfluxDB: Annotation support
- [Issue #633](https://github.com/grafana/grafana/issues/633). InfluxDB: InfluxDB can now act as a datastore for dashboards
- [Issue #610](https://github.com/grafana/grafana/issues/610). InfluxDB: Support for InfluxdB v0.8 list series response schemea (series typeahead)
- [Issue #525](https://github.com/grafana/grafana/issues/525). InfluxDB: Enhanced series aliasing (legend names) with pattern replacements
- [Issue #266](https://github.com/grafana/grafana/issues/266). Graphite: New option cacheTimeout to override graphite default memcache timeout
- [Issue #606](https://github.com/grafana/grafana/issues/606). General: New global option in config.js to specify admin password (useful to hinder users from accidentally make changes)
- [Issue #201](https://github.com/grafana/grafana/issues/201). Annotations: Elasticsearch datasource support for events
- [Issue #344](https://github.com/grafana/grafana/issues/344). Annotations: Annotations can now be fetched from non default datasources
- [Issue #631](https://github.com/grafana/grafana/issues/631). Search: max_results config.js option & scroll in search results (To show more or all dashboards)
- [Issue #511](https://github.com/grafana/grafana/issues/511). Text panel: Allow [[..]] filter notation in all text panels (markdown/html/text)
- [Issue #136](https://github.com/grafana/grafana/issues/136). Graph: New legend display option "Align as table"
- [Issue #556](https://github.com/grafana/grafana/issues/556). Graph: New legend display option "Right side", will show legend to the right of the graph
- [Issue #604](https://github.com/grafana/grafana/issues/604). Graph: New axis format, 'bps' (SI unit in steps of 1000) useful for network gear metics
- [Issue #626](https://github.com/grafana/grafana/issues/626). Graph: Downscale y axis to more precise unit, value of 0.1 for seconds format will be formated as 100 ms. Thanks @kamaradclimber
- [Issue #618](https://github.com/grafana/grafana/issues/618). OpenTSDB: Series alias option to override metric name returned from opentsdb. Thanks @heldr

**Documentation**
- [Issue #635](https://github.com/grafana/grafana/issues/635). Docs for features and changes in v1.7, new troubleshooting guide, new Getting started guide, improved install & config guide.


**Changes**
- [Issue #536](https://github.com/grafana/grafana/issues/536). Graphite: Use unix epoch for Graphite from/to for absolute time ranges
- [Issue #641](https://github.com/grafana/grafana/issues/536). General: Dashboard save temp copy feature settings moved from dashboard to config.js, default is enabled, and ttl to 30 days
- [Issue #532](https://github.com/grafana/grafana/issues/532). Schema: Dashboard schema changes, "Unsaved changes" should not appear for schema changes. All changes are backward compatible with old schema.

**Fixes**
- [Issue #545](https://github.com/grafana/grafana/issues/545). Graph: Fix formatting negative values (axis formats, legend values)
- [Issue #460](https://github.com/grafana/grafana/issues/460). Graph: fix for max legend value when max value is zero
- [Issue #628](https://github.com/grafana/grafana/issues/628). Filtering: Fix for nested filters, changing a child filter could result in infinite recursion in some cases
- [Issue #528](https://github.com/grafana/grafana/issues/528). Graphite: Fix for graphite expressions parser failure when metric expressions starts with curly brace segment

# 1.6.1 (2014-06-24)

**New features or improvements**
- [Issue #360](https://github.com/grafana/grafana/issues/360). Ability to set y min/max for right y-axis (RR #519)

**Fixes**

- [Issue #500](https://github.com/grafana/grafana/issues/360). Fixes regex InfluxDB queries intoduced in 1.6.0
- [Issue #506](https://github.com/grafana/grafana/issues/506). Bug in when using % sign in legends (aliases), fixed by removing url decoding of metric names
- [Issue #522](https://github.com/grafana/grafana/issues/522). Series names and column name typeahead cache fix
- [Issue #504](https://github.com/grafana/grafana/issues/504). Fixed influxdb issue with raw query that caused wrong value column detection
- [Issue #526](https://github.com/grafana/grafana/issues/526). Default property that marks which datasource is default in config.js is now optional
- [Issue #342](https://github.com/grafana/grafana/issues/342). Auto-refresh caused 2 refreshes (and hence mulitple queries) each time (at least in firefox)

# 1.6.0 (2014-06-16)

#### New features or improvements
- [Issue #427](https://github.com/grafana/grafana/issues/427). New Y-axis formater for metric values that represent seconds, Thanks @jippi
- [Issue #390](https://github.com/grafana/grafana/issues/390). Allow special characters in serie names (influxdb datasource), Thanks @majst01
- [Issue #428](https://github.com/grafana/grafana/issues/428). Refactoring of filterSrv, Thanks @Tetha
- [Issue #445](https://github.com/grafana/grafana/issues/445). New config for playlist feature. Set playlist_timespan to set default playlist interval, Thanks @rmca
- [Issue #461](https://github.com/grafana/grafana/issues/461). New graphite function definition added isNonNull,  Thanks @tmonk42
- [Issue #455](https://github.com/grafana/grafana/issues/455). New InfluxDB function difference add to function dropdown
- [Issue #459](https://github.com/grafana/grafana/issues/459). Added parameter to keepLastValue graphite function definition (default 100)
  [Issue #418](https://github.com/grafana/grafana/issues/418). to the browser cache when upgrading grafana and improve load performance
- [Issue #327](https://github.com/grafana/grafana/issues/327). Partial support for url encoded metrics when using Graphite datasource. Thanks @axe-felix
- [Issue #473](https://github.com/grafana/grafana/issues/473). Improvement to InfluxDB query editor and function/value column selection
- [Issue #375](https://github.com/grafana/grafana/issues/375). Initial support for filtering (templated queries) for InfluxDB. Thanks @mavimo
- [Issue #475](https://github.com/grafana/grafana/issues/475). Row editing and adding new panel is now a lot quicker and easier with the new row menu
- [Issue #211](https://github.com/grafana/grafana/issues/211). New datasource! Initial support for OpenTSDB, Thanks @mpage
- [Issue #492](https://github.com/grafana/grafana/issues/492). Improvement and polish to the OpenTSDB query editor
- [Issue #441](https://github.com/grafana/grafana/issues/441). Influxdb group by support, Thanks @piis3
- improved asset (css/js) build pipeline, added revision to css and js. Will remove issues related


#### Changes
- [Issue #475](https://github.com/grafana/grafana/issues/475). Add panel icon and Row edit button is replaced by the Row edit menu
- New graphs now have a default empty query
- Add Row button now creates a row with default height of 250px (no longer opens dashboard settings modal)
- Clean up of config.sample.js, graphiteUrl removed (still works, but depricated, removed in future)
  Use datasources config instead. panel_names removed from config.js. Use plugins.panels to add custom panels
- Graphite panel is now renamed graph (Existing dashboards will still work)

#### Fixes
- [Issue #126](https://github.com/grafana/grafana/issues/126). Graphite query lexer change, can now handle regex parameters for aliasSub function
- [Issue #447](https://github.com/grafana/grafana/issues/447). Filter option loading when having muliple nested filters now works better. Options are now reloaded correctly and there are no multiple renders/refresh inbetween.
- [Issue #412](https://github.com/grafana/grafana/issues/412). After a filter option is changed and a nested template param is reloaded, if the current value exists after the options are reloaded the current selected value is kept.
- [Issue #460](https://github.com/grafana/grafana/issues/460). Legend Current value did not display when value was zero
- [Issue #328](https://github.com/grafana/grafana/issues/328). Fix to series toggling bug that caused annotations to be hidden when toggling/hiding series.
- [Issue #293](https://github.com/grafana/grafana/issues/293). Fix for graphite function selection menu that some times draws outside screen. It now displays upward
- [Issue #350](https://github.com/grafana/grafana/issues/350). Fix for exclusive series toggling (hold down CTRL, SHIFT or META key) and left click a series for exclusive toggling
- [Issue #472](https://github.com/grafana/grafana/issues/472). CTRL does not work on MAC OSX but SHIFT or META should (depending on browser)

# 1.5.4 (2014-05-13)
### New features and improvements
- InfluxDB enhancement: support for multiple hosts (with retries) and raw queries ([Issue #318](https://github.com/grafana/grafana/issues/318), thx @toddboom)
- Added rounding for graphites from and to time range filters
  for very short absolute ranges ([Issue #320](https://github.com/grafana/grafana/issues/320))
- Increased resolution for graphite datapoints (maxDataPoints), now equal to panel pixel width. ([Issue #5](https://github.com/grafana/grafana/issues/5))
- Improvement to influxdb query editor, can now add where clause and alias ([Issue #331](https://github.com/grafana/grafana/issues/331), thanks @mavimo)
- New config setting for graphite datasource to control if json render request is POST or GET ([Issue #345](https://github.com/grafana/grafana/issues/345))
- Unsaved changes warning feature ([Issue #324](https://github.com/grafana/grafana/issues/324))
- Improvement to series toggling, CTRL+MouseClick on series name will now hide all others ([Issue #350](https://github.com/grafana/grafana/issues/350))

### Changes
- Graph default setting for Y-Min changed from zero to auto scalling (will not effect existing dashboards). ([Issue #386](https://github.com/grafana/grafana/issues/386)) - thx @kamaradclimber

### Fixes
- Fixes to filters and "All" option. It now never uses "*" as value, but all options in a {node1, node2, node3} expression ([Issue #228](https://github.com/grafana/grafana/issues/228), #359)
- Fix for InfluxDB query generation with columns containing dots or dashes ([Issue #369](https://github.com/grafana/grafana/issues/369), #348) - Thanks to @jbripley


# 1.5.3 (2014-04-17)
- Add support for async scripted dashboards ([Issue #274](https://github.com/grafana/grafana/issues/274))
- Text panel now accepts html (for links to other dashboards, etc) ([Issue #236](https://github.com/grafana/grafana/issues/236))
- Fix for Text panel, now changes take effect directly ([Issue #251](https://github.com/grafana/grafana/issues/251))
- Fix when adding functions without params that did not cause graph to update ([Issue #267](https://github.com/grafana/grafana/issues/267))
- Graphite errors are now much easier to see and troubleshoot with the new inspector ([Issue #265](https://github.com/grafana/grafana/issues/265))
- Use influxdb aliases to distinguish between multiple columns ([Issue #283](https://github.com/grafana/grafana/issues/283))
- Correction to ms axis formater, now formats days correctly. ([Issue #189](https://github.com/grafana/grafana/issues/189))
- Css fix for Firefox and using top menu dropdowns in panel fullscren / edit mode ([Issue #106](https://github.com/grafana/grafana/issues/106))
- Browser page title is now Grafana - {{dashboard title}} ([Issue #294](https://github.com/grafana/grafana/issues/294))
- Disable auto refresh zooming in (every time you change to an absolute time range), refresh will be restored when you change time range back to relative ([Issue #282](https://github.com/grafana/grafana/issues/282))
- More graphite functions

# 1.5.2 (2014-03-24)
### New Features and improvements
- Support for second optional params for functions like aliasByNode ([Issue #167](https://github.com/grafana/grafana/issues/167)). Read the wiki on the [Function Editor](https://github.com/torkelo/grafana/wiki/Graphite-Function-Editor) for more info.
- More functions added to InfluxDB query editor ([Issue #218](https://github.com/grafana/grafana/issues/218))
- Filters can now be used inside other filters (templated segments) ([Issue #128](https://github.com/grafana/grafana/issues/128))
- More graphite functions added

### Fixes
- Float arguments now work for functions like scale ([Issue #223](https://github.com/grafana/grafana/issues/223))
- Fix for graphite function editor, the graph & target was not updated after adding a function and leaving default params as is #191

The zip files now contains a sub folder with project name and version prefix. ([Issue #209](https://github.com/grafana/grafana/issues/209))

# 1.5.1 (2014-03-10)
### Fixes
- maxDataPoints must be an integer #184 (thanks @frejsoya for fixing this)

For people who are find Grafana slow for large time spans or high resolution metrics. This is most likely due to graphite returning a large number of datapoints. The maxDataPoints parameter solves this issue. For maxDataPoints to work you need to run the latest graphite-web (some builds of 0.9.12 does not include this feature).

Read this for more info:
[Performance for large time spans](https://github.com/torkelo/grafana/wiki/Performance-for-large-time-spans)

# 1.5.0 (2014-03-09)
### New Features and improvements
- New function editor [video demo](http://youtu.be/I90WHRwE1ZM) ([Issue #178](https://github.com/grafana/grafana/issues/178))
- Links to function documentation from function editor ([Issue #3](https://github.com/grafana/grafana/issues/3))
- Reorder functions ([Issue #130](https://github.com/grafana/grafana/issues/130))
- [Initial support for InfluxDB](https://github.com/torkelo/grafana/wiki/InfluxDB) as metric datasource (#103), need feedback!
- [Dashboard playlist](https://github.com/torkelo/grafana/wiki/Dashboard-playlist) ([Issue #36](https://github.com/grafana/grafana/issues/36))
- When adding aliasByNode smartly set node number ([Issue #175](https://github.com/grafana/grafana/issues/175))
- Support graphite identifiers with embedded colons ([Issue #173](https://github.com/grafana/grafana/issues/173))
- Typeahead & autocomplete when adding new function ([Issue #164](https://github.com/grafana/grafana/issues/164))
- More graphite function definitions
- Make "ms" axis format include hour, day, weeks, month and year ([Issue #149](https://github.com/grafana/grafana/issues/149))
- Microsecond axis format ([Issue #146](https://github.com/grafana/grafana/issues/146))
- Specify template parameters in URL ([Issue #123](https://github.com/grafana/grafana/issues/123))

### Fixes
- Basic Auth fix ([Issue #152](https://github.com/grafana/grafana/issues/152))
- Fix to annotations with graphite source & null values ([Issue #138](https://github.com/grafana/grafana/issues/138))

# 1.4.0 (2014-02-21)
### New Features
- #44 Annotations! Required a lot of work to get right. Read wiki article for more info. Supported annotations data sources are graphite metrics and graphite events. Support for more will be added in the future!
- #35 Support for multiple graphite servers! (Read wiki article for more)
- #116 Back to dashboard link in top menu to easily exist full screen / edit mode.
- #114, #97 Legend values now use the same y axes formatter
- #77 Improvements and polish to the light theme

### Changes
- #98 Stack is no longer by default turned on in graph display settings.
- Hide controls (Ctrl+h) now hides the sub menu row (where filtering, and annotations are). So if you had filtering enabled and hide controls enabled you will not see the filtering sub menu.

### Fixes:
- #94 Fix for bug that caused dashboard settings to sometimes not contain timepicker tab.
- #110 Graph with many many metrics caused legend to push down graph editor below screen. You can now scroll in edit mode & full screen mode for graphs with lots of series & legends.
- #104 Improvement to graphite target editor, select wildcard now gives you a "select metric" link for the next node.
- #105 Added zero as a possible node value in groupByAlias function

# 1.3.0 (2014-02-13)
### New features or improvements
- #86 Dashboard tags and search (see wiki article for details)
- #54 Enhancement to filter / template. "Include All" improvement
- #82 Dashboard search result sorted in alphabetical order

### Fixes
- #91 Custom date selector is one day behind
- #89 Filter / template does not work after switching dashboard
- #88 Closed / Minimized row css bug
- #85 Added all parameters to summarize function
- #83 Stack as percent should now work a lot better!

# 1.2.0 (2014-02-10)
### New features
- #70 Grid Thresholds (warning and error regions or lines in graph)
- #72 Added an example of a scripted dashboard and a short wiki article documenting scripted dashboards.

### Fixes
- #81 Grid min/max values are ignored bug
- #80 "stacked as percent" graphs should always use "max" value of 100 bug
- #73 Left Y format change did not work
- #42 Fixes to grid min/max auto scaling
- #69 Fixes to lexer/parser for metrics segments like "10-20".
- #67 Allow decimal input for scale function
- #68 Bug when trying to open dashboard while in edit mode

# 1.1.0 (2014-02-06)
### New features:

- #22 Support for native graphite png renderer, does not support click and select zoom yet
- #60 Support for legend values (cactiStyle, min, max, current, total, avg). The options for these are found in the new "Axes & Grid" tab for now.
- #62 There is now a "New" button in the search/open dashboard view to quickly open a clean empty dashboard.
- #55 Basic auth is now supported for elastic search as well
- some new function definitions added (will focus more on this for next release).

### Fixes
- #45 zero values from graphite was handled as null.
- #63 Kibana / Grafana on same host would use same localStorage keys, now fixed
- #46 Impossible to edit graph without a name fixed.
- #24 fix for dashboard search when elastic search is configured to disable _all field.
- #38 Improvement to lexer / parser to support pure numeric literals in metric segments

Thanks to everyone who contributed fixes and provided feedback :+1:

# 1.0.4 (2014-01-24)
- [Issue #28](https://github.com/grafana/grafana/issues/28) - Relative time range caused 500 graphite error in some cases (thx rsommer for the fix)

# 1.0.3 (2014-01-23)
- #9 Add Y-axis format for milliseconds
- #16 Add support for Basic Auth (use http://username:password@yourgraphitedomain.com)
- #13 Relative time ranges now uses relative time ranges when issuing graphite query

# 1.0.2 (2014-01-21)
- [Issue #12](https://github.com/grafana/grafana/issues/12), should now work ok without ElasticSearch

# 1.0.1 (2014-01-21)
- Resize fix
- Improvements to drag & drop
- Added a few graphite function definitions
- Fixed duplicate panel bug
- Updated default dashboard with welcome message and randomWalk graph

# 1.0.0 (2014-01-19)

First public release
