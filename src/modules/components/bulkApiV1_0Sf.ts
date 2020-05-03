/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */


import { CommonUtils } from "./commonUtils";
import parse = require('csv-parse/lib/sync');
import { MessageUtils, RESOURCES } from "./messages";
import { RESULT_STATUSES, OPERATION } from "./statics";
import { ApiResult, ApiResultRecord, IApiProcess, MigrationJobTask, ScriptOrg, IApiJobCreateResult } from "../models";
const request = require('request');
const endpoint = '/services/data/[v]/jobs/ingest';
const requestTimeout = 10 * 60 * 1000;// 10 minutes of timeout for long-time operations and for large csv files and slow internet connection


/**
 * Implementation of the Salesforce Bulk API v2.0
 *
 * @export
 * @class BulkApiV1_0sf
 */
export class BulkApiV1_0sf implements IApiProcess {

    task: MigrationJobTask;
    isSource: boolean;
    operation: OPERATION;

    // Check ???
    get org(): ScriptOrg {
        return this.isSource ? this.task.sourceOrg : this.task.targetOrg;
    }

    // Check ???
    get logger(): MessageUtils {
        return this.org.script.logger;
    }

    // Check ???
    get instanceUrl(): string {
        return this.org.instanceUrl;
    }

    // Check ???
    get accessToken(): string {
        return this.org.accessToken;
    }

    
    constructor(task: MigrationJobTask, isSource: boolean, operation: OPERATION) {
        this.task = task;
        this.operation = operation;
    }


    // ----------------------- Interface IApiProcess ----------------------------------
    async executeCRUD(records: Array<any>, progressCallback: (progress: ApiResult) => void): Promise<Array<any>> {
        let jobResult = await this.createCRUDApiJobAsync(records);
        return await this.processCRUDApiJobAsync(jobResult, progressCallback);
    }

    async createCRUDApiJobAsync(records: Array<any>): Promise<IApiJobCreateResult> {
        // TODO: Implement this

    }

    async processCRUDApiJobAsync(createJobResult: IApiJobCreateResult, progressCallback: (progress: ApiResult) => void): Promise<Array<any>> {
        // TODO: Implement this
    }
    // ----------------------- ---------------- -------------------------------------------    

}