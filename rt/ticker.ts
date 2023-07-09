///<reference path='refs.ts'/>

module TDev {
    // device signature:
    //   touch-enabled
    //   physical keyboard present
    //   user-agent
    //   portrait vs landscape
    export enum Ticks {
        noEvent,

        mainInit,
        mainHashChange,
        mainKeyEvent,
        mainShortcutKeyEvent,  // i.e., not coming from textbox/textarea
        mainResetWorld,

        artSoundPreviewPlay,

        docsEdit,

        exportAzure,
        exportCordova,
        exportHTML5,

        scriptPropsIconArt,
        scriptPropsSplashArt,

        hourOfCodeDoneStep,
        hourOfCodeKeepCoding,
        hourOfCodeConfirm,
        hourOfCodeDone,
        hourOfCodeMore,
        hourOfCodeFinal,

        tutorialStart,
        tutorialEnd,
        tutorialTranslateSplash,
        tutorialTranslateStep,
        tutorialTranslateScript,
        tutorialKeepEditing,
        tutorialMoreTutorials,
        tutorialNextStep,

        dodStart,
        dodDrop,
        dodWrongTarget,

        cordovaBuild,

        translateDocTopic,

        legalNoticeSignIn,
        legalNoticeAgree,

        calcAddMissingArgs,
        calcBackspace,
        calcCopy,
        calcCut,
        calcDedicatedOp,
        calcEdit,
        calcEditString,
        calcExtract,
        calcPromoteToParameter,
        calcGoToDef,
        calcFindRefs,
        calcAddDataVar,
        calcUnselect,
        calcExtend,
        calcReplaceInScript,
        calcReplaceInSelection,
        calcReplaceInAction,
        calcInsertAssignment,
        calcInsertString,
        calcIntelliButton,
        calcIntelliButton0,
        calcIntelliButton1,
        calcIntelliButton2,
        calcIntelliButton3,
        calcIntelliButton4,
        calcIntelliButton5plus,
        calcIntelliLiteral,
        calcIntelliLocal,
        calcIntelliProperty,
        calcIntelliPropertyPrimary,
        calcIntelliSingleton,
        calcIntelliLibrary,
        calcIntelliResource,
        calcKeyboardSearch,
        calcMoveCursorLeft,
        calcMoveCursorRight,
        calcNewLine,
        calcNextIntelliTopPage,
        calcNextIntelliPageSearch,
        calcNextIntelliPage,
        calcNextIntelliPage0,
        calcNextIntelliPage1,
        calcNextIntelliPage2,
        calcNextIntelliPage3,
        calcNextIntelliPage4,
        calcNextIntelliPage5plus,
        calcAsync,
        calcAwait,
        calcNot,
        calcNumber,
        calcPaste,
        calcPickColor,
        calcPickNumber,
        calcDemoteIntoLocal,
        calcPromoteIntoGlobal,
        calcPromoteIntoField,
        calcRenameLocal,
        calcRenameProperty,
        calcSearchBack,
        calcSearchRun,
        calcSearchCompile,
        calcSimplify,
        calcStrip,
        calcSpecialKey,
        calcStartSearch,
        calcStoreInVar,
        calcSwapBoolean,
        calcSwapAsync,
        calcIntelliAsync,
        calcSwitchToNormal,
        calcSwitchToNumber,
        calcTrueFalse,
        calcUndo,
        calcGoToBoxProperty,
        calcAddBoxProperty,
        calcInsertStringParamterValue,
        calcHelp,
        calcHelpOverlay,
        calcElseIf,
        calcUnElseIf,
        calcBindGlobal,
        calcFixItAtomic,
        calcEditArt,
        calcAddOptionalParameter,
        calcChangeOptionalParameter,

        codeAddAbove,
        codeAddBelow,
        codeShow,
        codeContinue,
        codeReturn,
        codeBreak,
        codeBoxed,
        codeCopy,
        codeCopySelection,
        codeDeleteSelection,
        codeCut,
        codeCutSelection,
        codeCycleSidePane,
        codeCycleSidePaneFull,
        codeExtractAction,
        codeFocusSidePane,
        codeFocusSidePaneFull,
        codeFor,
        codeForEach,
        codeHub,
        codeIf,
        codeMoveLeft,
        codeNewVar,
        codePaste,
        codeRun,
        codeResume,
        codeStartSelection,
        codeSurround,
        codeUndo,
        codeSplit,
        codeWhile,
        codeUninstallScript,
        codeBackFromSearch,

        actionPropPrivate,
        actionPropTest,
        actionPropAtomic,
        
        siteMenuCreateCode,
        siteMenuImportCode,
        siteMenuGroups,
        siteMenuTutorials,
        siteMenuProjects,
        siteMenuSkip,
        siteMenuHome,
        siteMenuHelp,
        siteMenuGettingStarted,
        siteMenuMyScripts,
        siteMenuSignIn,
        siteMenuProfile,
        siteMenuChannels,

        btnPaste,
        btnCopy,
        btnCut,
        btnSelect,
        btnTryFix,
        btnUndoFix,
        btnAddUp,
        btnAddDown,
        btnMoveLeft,
        btnBreakpoint,
        btnChangeKind,
        calcBtnBackspace,
        calcBtnUndo,
        calcBtnNumberKeypad,
        calcBtnMiscKeypad,
        calcBtnNormalKeypad,
        calcBtnApiSearch,
        editBtnSideSearch,
        chooseCancel,
        editTapBelow,

        coverageShown,
        coverageOpenInEditor,
        coverageBucketSurveyActionEdit,
        coverageBucketSurveyStatementEdit,
        coverageBucketSurveyDebugger,
        coverageBucketSurveyBreakpoint,
        coverageBucketSurveyExceededSuccessfully,

        profileShown,
        profileOpenInEditor,

        debuggerExit,
        debuggerContinue,
        debuggerStepIn,
        debuggerStepOver,
        debuggerStepOut,
        debuggerToggleBreakpoint,
        debuggerViewInit,
        debuggerPauseWall,
        debuggerShowValues,
        debuggerShowStack,
        debuggerGotoWall,
        debuggerGotoCurrent,
        debuggerAppLog,
        debuggerHelp,
        debuggerValueClicked,
        debuggerKeyboardEvent,

        editorTutorialClose,
        editorTutorialNext,
        editorTutorialPrevious,

        externalSave,
        externalLoad,
        externalCompile,
        externalRun,

        sideAddAction,
        sideAddActionTest,
        sideAddActionTypeDef,
        sideAddEvent,
        sideAddLibrary,
        sideAddPage,
        sideAddRecord,
        sideAddObject,
        sideAddTable,
        sideAddIndex,
        sideAddDecorator,
        sideAddResource,
        sideAddVariable,
        sideAddAnything,
        sideHelp,
        sideBraces,
        sideDebug,
        sideLogs,
        sideErrors,
        sideDeployWebSite,
        sidePlugins,
        sideButtonPlugin,
        sidePreview,
        sideHistory,
        sideHistoryGoTo,
        sidePaste,
        sideScript,
        sideScriptGoToDecl,
        sideSearch,
        sideSearchGoToDecl,
        sideSearchGoToStmt,
        sidePublish,
        sideShare,
        sideDisconnect,
        sideRun,
        sideCut,
        sideCopy,
        sideDelete,
        sideFindRefs,
        sideActionHeaderInit,
        sideCommentInit,
        sideParameterInit,
        sideResetSidePane,
        sideInlineActionInit,
        sideExport,
        sideAllTests,
        sideTestOne,
        sideEditLibrary,
        sideEditString,
        sideUpdate,
        sideUpdateOne,
        sideActionAddInput,
        sideActionAddOutput,
        sideTutorialCancel,
        sideTutorialRedisplay,

        sideMoreOptions,

        appsCreateAzureWebsite,
        appsDeployWebsite,

        pluginStop,
        pluginRunOperation,
        pluginAddMore,
        pluginRunAnnotationOperation,

        searchApiSynthesis,
        searchApiSearchArt,
        searchApiSearchLib,
        searchApiSearchAuto,
        searchApiInsertArt,
        searchApiUploadArt,
        searchApiInsertLib,

        wallBack, // do not rename, or fix tipmanager
        wallJS,
        wallEdit,
        wallReplay,
        wallScreenshot,
        wallLogs,
        wallSerial,
        wallStop,
        wallStopForce,
        wallPause,
        wallResume,
        wallRun,
        wallTraces,
        wallAddHeart,
        wallRemoveHeart,

        commentAttach,
        commentBugTracking,

        coreRun,
        coreNativeCompile,
        coreResume,
        coreRerun,
        corePublishHidden,
        corePublishPublic,

        runtimePlayAgain,
        runtimeBack,

        appUpdateAvailable,
        appNoUpdate,
        appQuickUpdate,
        appUpdate,

        editorUpdateScript,
        editorUpdateLibrary,
        editorRunWithProfiling,
        editorRunWithCoverage,
        editorRunAsMinion,

        viewActionInit,
        viewLibraryRefInit,
        viewRecordInit,
        viewScriptInit,
        viewVariableInit,

        hubCreateScript,
        hubCreateGame,
        hubCreateGroup,
        hubCreateList,
        hubJoinGroup,
        hubUploadPicture,
        hubUploadSound,
        hubGameTutorial,
        hubWinStore,
        hubDocs,
        hubFirstTutorial,
        hubDocsTutorial,
        hubBasicEditorVideo,
        hubBasicEditorVideoVoice,
        hubBasicEditorVideoSubtitles,
        hubBeginnersGettingStarted,
        hubCCGA,
        hubChatSearch,
        hubChooseSkill,
        hubDevBootCamp,
        hubDocsApi,
        hubDocsWhatsNew,
        hubAdvancedEditorVideo,
        hubSeeMoreMyScripts,
        hubSeeMoreNewScripts,
        hubSeeMoreArt,
        hubSeeMoreUsers,
        hubSeeMoreCloudOther,
        hubSeeMoreShowcase,
        hubSeeMoreTutorials,
        hubSeeMoreTopScripts,
        hubSeeMoreDocs,
        hubSeeMoreCloud,
        hubSeeMoreGroups,
        hubSeeMoreLists,
        hubMyScriptsShowcase,
        hubMyScriptsTemplate,
        hubNotifications,
        hubUpdates,
        hubDoUpdates,
        hubTests,
        hubShowcaseMgmt,
        hubBenchmarks,
        hubForum,
        hubFacebook,
        hubTwitter,
        hubYouTube,
        hubSettings,
        hubAbout,
        hubHelp,
        hubWrongTime,
        hubTag,
        hubTagFromList,
        hubFeedback,
        hubChooseWallpaper,

        changeSkillScriptProperties,
        changeSkillActionProperties,
        changeSkillScriptExplorer,

        editorSkillBlock,
        editorSkillClassic,
        editorSkillCurly,

        groupCodeReset,
        groupCodeNew,
        groupCodeGet,
        groupDelete,
        groupLeave,
        groupJoin,
        groupAllowAnyoneToJoin,
        groupRequireInvitationCodeToJoin,
        groupChangePicture,

        publishShareGroup,

        browseEditInstall,
        browseRunInstall,
        browseRun,
        browseEdit,
        browsePin,
        browseHeart,
        browseUnHeart,
        browseModerate,
        browsePublish,
        browseUninstall,
        browsePush,
        browseDiffBase,
        browseConvertToTutorial,
        browseConvertToLesson,
        browseAddScriptToList,
        browseUpdate,
        browseSendPullRequest,
        browseClone,
        browseSave,
        browseCreateCode,
        browseImportCode,
        browsePublicationNotes,
        browseListPointers,
        browseListBugs,
        browseListReleases,
        browseShare,
        browseListMyScripts,
        browseListNew,
        browseListTop,
        browseListShowcase,
        browseListForum,
        browseListDocs,
        browseListHelp,
        browseListGroups,
        browseListArt,
        browseListMyArt,
        browseListTags,
        browseListSearch,
        browseListUsers,
        browseListLists,
        browseFollowTopic,

        introSlideGetStarted,
        introSlideLimitations,
        introSlideCreateApps,
        introSlidePopCorn,
        introSlideLogIn,
        introSlideDismiss,

        recordAddKey,
        recordAddValue,
        recordAddAction,
        recordPersTemporary,
        recordPersLocal,
        recordPersCloud,
        recordPersPartial,
        recordExported,


        dbgEvent,
        dbgLogEvent,

        learnPlayVideo,
        learnBrowseDoc,

        offlineLoginSync,
        offlineLoginSyncNoToken,
        offlineLoginGettingStarted,

        offlineEnsureLogin,
        offlineEnsureLoginOk,

        translateNagDisplay,
        translateNagOk,

        benchmarksNagDisplay,
        benchmarksNagDismiss,
        benchmarksNagRunOne,
        benchmarksNagRunSuite,

        songAlbumPlay,
        songPlay,

        warningNotificationTap,

        crashDialogEdit,
        crashDialogDebug,

        toLibNewLib,
        toLibExistingLib,
        toLibOKtoMove,
        toLibAdvanceSelectedToPending,
        toLibMakeTheMove,
        toLibDiscardPending,
        toLibExitToEditor,

        collabFirstLoad,
        collabResume,
        collabRecordAst,
        collabRealMerge,
        collabPostChatMessage,
        collabStartCollaboration,
        collabStopCollaboration,

        codeCompile
    }

    export interface TickEvent
    {
        timestamp:number;
        event:Ticks;
        arg?:string;
    }

    export interface BugReport {
        exceptionConstructor: string;
        exceptionMessage: string;
        context: string;
        currentUrl: string;
        jsUrl: string;
        scriptId: string;
        stackTrace: string;
        sourceURL: string;
        line: number;
        eventTrace: string;
        userAgent: string;
        resolution: string;
        timestamp: number;
        platform: string[];
        worldId: string;
        kind: string;
        attachments: string[];
        tdVersion?: string;
        logMessages?: LogMessage[];
        
        reportId:string;
    }

    export interface TicksReport {
        dateStr: string;
        sessionEvents: any;
        platform: string[];
        worldId: string;
        jsUrl: string;
    }

    export interface RecordedEvents
    {
        dateStr:string; // YYYY.MM.DD
        sessionEvents:any; // { (tickName: number)* }
        chunkId:number;
    }

    export module Ticker {
        var logMsgs:TickEvent[] = [];
        var logSz = 200;
        var logIdx = -1;
        var thresholdTime = -1
        var dateStr = ""
        var sessionEvents:any = {}
        var disabled = false;
        var delay = 10; // initial, 10s
        var chunkId = 1;
        var maxDelay = 300; // 300s
        var initialized = false;

        export var mainJsName = "unknown";

        export var fillEditorInfoBugReport: (b: BugReport) => void;
        export var fillEditorInfoTicksReport: (b: TicksReport) => void;

        function setDate():void
        {
            var now = new Date()
            dateStr = Util.fmt("{0}.{1}.{2}", now.getFullYear(), now.getMonth() + 1, now.getDate())
            if (delay > maxDelay)
                delay = maxDelay;
            thresholdTime = now.getTime() + delay*1000;
        }

        export function disable()
        {
            disabled = true
        }

        export function init()
        {
            if (/ckns_policy=..0/.test(document.cookie)) {
                disable();
                return;
            }

            var d = window.localStorage["ticksDelay"] * 1;
            if (d) delay = d;

            setDate();

            var archived = window.localStorage["archivedEvents"]
            if (archived) {
                var prevEvents:RecordedEvents[];
                try {
                    prevEvents = JSON.parse(archived)
                } catch (e) {
                    Util.log("bogus JSON in archivedEvents: " + archived)
                    Util.check(false, "malformed JSON in archived events");
                    delete window.localStorage["archivedEvents"]
                }

                if (prevEvents) {
                    prevEvents.forEach((e) => {
                        chunkId = Math.max(e.chunkId, chunkId)
                    });
                    chunkId++;
                    var last = prevEvents.peek()
                    if (!!last && last.dateStr == dateStr) {
                        sessionEvents = last.sessionEvents
                        prevEvents.pop()
                        window.localStorage["archivedEvents"] = JSON.stringify(prevEvents)
                    }
                    sendOutEvents(prevEvents);
                }
            }

            usageTick();

            initialized = true;
        }

        export function saveCurrent(sendCurrent = false)
        {
            var prevEvents:RecordedEvents[] = []

            var archived = window.localStorage["archivedEvents"]
            if (archived)
                prevEvents = JSON.parse(archived)
            prevEvents.push({
                sessionEvents: sessionEvents,
                dateStr: dateStr,
                chunkId: chunkId++
            })

            prevEvents = prevEvents.filter((e) => !!e.dateStr)

            if (prevEvents.length > 30)
                prevEvents = prevEvents.slice(prevEvents.length - 30)

            var newVal = JSON.stringify(prevEvents)
            if (newVal.length > 50000)
                newVal = "[]" // drop it if it's getting big
            window.localStorage["archivedEvents"] = newVal

            if (sendCurrent && Cloud.hasAccessToken() && Cloud.isOnline())
                (<any>sendOutEvents)(prevEvents); // TSBUG: stack overflow
        }

        function checkDate():void
        {
            if (Util.now() > thresholdTime) {
                setDate()
                saveCurrent(true)
                RT.Perf.saveCurrentAsync(true).done();
                if (delay < maxDelay) {
                    delay *= 1.1;
                    window.localStorage["ticksDelay"] = delay + "";
                }
                sessionEvents = {}
            }
        }

        function sendOutEvents(events:RecordedEvents[])
        {            
            if (events.length == 0) return;
            var currId = events[0].chunkId
            var req = <TicksReport>{
                dateStr: events[0].dateStr,
                sessionEvents: events[0].sessionEvents,
                platform: Browser.platformCaps,
                worldId: "",
                jsUrl: mainJsName
            }
            if (fillEditorInfoTicksReport)
                fillEditorInfoTicksReport(req);

            function sendNextEvents() {
                var events = window.localStorage["archivedEvents"]
                if (events) {
                    var newEvents:RecordedEvents[] = JSON.parse(events);
                    window.localStorage["archivedEvents"] = JSON.stringify(newEvents.filter((t) => t.chunkId != currId))
                    sendOutEvents(newEvents)
                }                
            }

            if (Object.keys(req.sessionEvents).length == 0) // any event to send?
                sendNextEvents();            
            else
                Cloud.postTicksAsync(req).done(() => sendNextEvents(), e => { }) // ignore error; will try again later
        }


        export function tickName(t:Ticks):string
        {
            return enumToString(Ticks, t);
        }

        export function tickN(t:Ticks, v:number)
        {
            tick(t + Util.boundTo(0, v, 5))
        }

        export function dbg(f:string, ...args:any[])
        {
            var msg = Util.fmt_va(f, args);
            tick(Ticks.dbgEvent, msg);
        }

        export function localStorageState()
        {
            if (!window || !window.localStorage) return "";

            var l = window.localStorage;
            var r = "";
            for (var i = 0; i < l.length; ++i) {
                r += l.key(i) + " -> " + l[l.key(i)].length + ",  ";
            }
            return r;
        }

        export function mkReportId()
        {
            return "BuG" + (20000000000000 - Date.now()) + Random.uniqueId(12)
        }

        export function mkBugReport(err:any, ctx = "")
        {
            console.log(err); // the browser console maps .js to .ts files (see README for generating .map)

            var r:BugReport = {
                exceptionConstructor: "(unknown)",
                exceptionMessage: "(unknown)",
                context: ctx,
                currentUrl: "",
                worldId: "",
                kind: "",
                scriptId: "",
                stackTrace: "",
                sourceURL: "",
                line: -1,
                eventTrace: "",
                userAgent: "",
                resolution: "",
                jsUrl: mainJsName,
                timestamp: Util.now(),
                platform: [],
                attachments: [],
                tdVersion: Cloud.config.tdVersion || "",
                reportId: mkReportId(),
            }

            if (fillEditorInfoBugReport)
                fillEditorInfoBugReport(r);

            if (Array.isArray(err.bugAttachments))
                r.attachments.pushRange(err.bugAttachments)

            var meta = err.tdMeta
            if (meta) {
                if (meta.reportId) r.reportId = meta.reportId
            }

            try {
                var isDatabaseError = Util.isError(err, e => e.isDatabaseError);
                var isNetworkError = Util.isError(err, e => e.isNetworkError);
                r.kind = isDatabaseError ? "databaseError" : isNetworkError ? "networkError" : "";
                if (!err) r.exceptionMessage = "(null)";
                else if (err.message) {
                    r.exceptionMessage = err.message + "";
                    if (err.stack)
                        r.stackTrace = err.stack + "";
                    else if (err.sourceURL) // Safari doesn't give full stack trace, just top-level method
                        r.stackTrace = "@" + err.sourceURL + ":" + err.line;
                } else if (Array.isArray(err)) {
                    r.exceptionMessage = err.join("\n");
                } else {
                    r.exceptionMessage = err + "";
                }

                if (err && err.name && err.name != "Error")
                    r.exceptionConstructor = err.name;
                else
                    r.exceptionConstructor = r.exceptionMessage.substr(0, 40);
                if (isDatabaseError)
                    r.exceptionConstructor = "DB " + r.exceptionConstructor;
                if (/autotest-/.test(ctx))
                    r.exceptionConstructor = "TEST " + r.exceptionConstructor;
                if (/^bitvm/.test(ctx))
                    r.exceptionConstructor = "BITVM " + r.exceptionConstructor;

                if (r.exceptionMessage && /\[object /.test(r.exceptionMessage)) {
                    var msg = r.exceptionMessage;
                    var errorInfo = Util.getErrorInfo(err);
                    if (errorInfo)
                        msg += " " + errorInfo;
                    else
                        Object.keys(err).forEach((k) => {
                            if (msg.length < 2000) {
                                msg += " " + k + ": '" + err[k] + "'";
                            }
                        });
                    r.exceptionMessage = msg;
                }

                if (/QUOTA/.test(r.exceptionMessage))
                    r.exceptionMessage += "  " + localStorageState();

                if (ctx != "custom")
                    Ticker.dbg("CRASH REPORT " + r.exceptionMessage); // in case there is another crash report later

                if (err.sourceURL)
                    r.sourceURL = err.sourceURL;
                if (err.line)
                    r.line = err.line;
            } catch (e) {
                debugger;
            }

            try {
                r.logMessages = Util.getLogMsgs();
                r.logMessages.reverse()
                var maxSize = 100000
                var maxIter = 20
                while (JSON.stringify(r.logMessages).length > maxSize) {
                    r.logMessages = r.logMessages.slice(0, Math.floor(r.logMessages.length / 2))
                    if (maxIter-- < 0) {
                        r.logMessages = []
                        break
                    }
                }
                r.eventTrace = ""
            } catch (e) {
                debugger;
            }

            if (ctx != "custom" && (<any>window).tdAppInsights)
                try {
                (<any>window).tdAppInsights.trackException(err, r);
                } catch (e) { }

            return r;
        }

        export function bugReportToString(b:BugReport, short = false)
        {
            var e = (s:string) => s.replace(/\r?\n/, " ");
            var r = 
                   "Error: " + e(b.exceptionMessage) + "\n" +
                   "URL: " + e(b.currentUrl) + " (script: " + e(b.scriptId) + ", context: " + e(b.context) + ")\n" +
                   "JS-URL: " + e(b.jsUrl) + "\n" +
                   "Platform: " + e(Browser.platformCaps.join(", ")) + "\n" +
                   "UserAgent: " + e(b.userAgent) + " (resolution: " + e(b.resolution) + ")\n" +
                   "Date: " + new Date(b.timestamp).toString() + "\n"
            if (!short)
                r += "\n" +
                   "RecentEvents:\n" + b.eventTrace + "\n\n" +
                   "StackTrace:\n" + b.stackTrace + "\n\n";
            return r;
        }

        export function bugReportForHash(b:BugReport)
        {
            return b.exceptionMessage + " " + b.stackTrace;
        }

        export function rawTick(tn:string)
        {
            Util.log("TICK: " + tn)

            if (!initialized || disabled) return;

            checkDate();

            tn = tn.replace(/[^a-zA-Z_]/g, "_")

            if (shouldStoreTick(tn))
                if (sessionEvents[tn])
                    sessionEvents[tn]++;
                else
                    sessionEvents[tn] = 1;
        }

        function shouldStoreTick(tn:string)
        {
            if (!tn) return false;
            if (Cloud.config.tickFilter)
                return !!Cloud.config.tickFilter[tn.replace(/\|.*/, "")];
            else
                return true;
        }

        function tickBase(t: Ticks, sep: string, arg?: string) {
            if (t == Ticks.noEvent || !t) return;

            var tn = tickName(t)
            if (arg)
                tn += sep + arg;
            if (t == Ticks.dbgLogEvent) {
                t = Ticks.dbgEvent;
            } else if (t == Ticks.dbgEvent)
                Util.log("DBG: " + tn);
            else Util.log("TICK: " + tn);

            if (!initialized || disabled) return;

            checkDate();

            var m = <TickEvent>{ timestamp: Util.now(), event: t, arg: arg }
            if (logIdx >= 0) {
                logMsgs[logIdx++] = m;
                if (logIdx >= logSz) logIdx = 0;
            } else {
                logMsgs.push(m);
                if (logMsgs.length >= logSz)
                    logIdx = 0;
            }

            if (t != Ticks.dbgEvent)
                poke();

            // this one we only wanted logged, not counted
            if (t != Ticks.dbgEvent && shouldStoreTick(tn)) {
                if (sessionEvents[tn])
                    sessionEvents[tn]++;
                else
                    sessionEvents[tn] = 1;

                if ((<any>window).tdAppInsights)
                    try {
                        (<any>window).tdAppInsights.trackEvent(tn);
                    } catch (e) { }
            }
        }

        export function tickArg(t: Ticks, arg?: string) {
            return tickBase(t, "$", arg);
        }

        export function tick(t:Ticks, arg?:string)
        {
            return tickBase(t, "|", arg);
        }

        export function getRecentEvents()
        {
            if (logIdx >= 0)
                return logMsgs.slice(logIdx).concat(logMsgs.slice(0, logIdx));
            else
                return logMsgs.slice(0);
        }

        function usageTick()
        {
            var id = getCurrentEditorId();
            if (id && !document.hidden && lastPoke) {
                if (Browser.isCellphone)
                    id += "_mobile"
                rawTick("editor_" + id)
                lastPoke = 0;
            }
            // avarage out to once per 10s, but get more even probabilistic distribution
            Util.setTimeout(RT.Math_.random_range(3000,17000), usageTick)
        }

        var currentEditorId:string;
        var lastPoke:number;
        export function poke()
        {
            lastPoke = Util.now();
        }
        export function setCurrentEditorId(id:string) {
            Util.log("set editor: " + id)
            currentEditorId = id;
        }
        export function getCurrentEditorId() { return currentEditorId; }
    }

    export function tick(t: Ticks, arg?: string) { Ticker.tick(t, arg) }
    export function tickArg(t: Ticks, arg?: string) { Ticker.tickArg(t, arg) }
    export function tickN(t:Ticks, v:number) { Ticker.tickN(t, v) }
}
